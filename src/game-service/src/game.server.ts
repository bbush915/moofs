import { sendUnaryData, ServerUnaryCall, status } from "@grpc/grpc-js";
import knex from "knex";
import { v4 } from "uuid";

import configuration from "../../../db/knexfile";
import { IGameServer } from "../../../protos/api/game_grpc_pb";
import {
  AnswerQuestionRequest,
  AnswerQuestionResponse,
  GetQuestionRequest,
  GetQuestionResponse,
} from "../../../protos/api/game_pb";
import { TriviaService } from "./trivia.service";

const db = knex(configuration);

export const GameServerImpl: IGameServer = {
  getQuestion: (
    { request }: ServerUnaryCall<GetQuestionRequest, GetQuestionResponse>,
    callback: sendUnaryData<GetQuestionResponse>
  ): void => {
    (async () => {
      const playerId = request.getPlayerId();

      const triviaService = new TriviaService();

      const { category, difficulty, question, correct_answer, incorrect_answers } =
        await triviaService.getQuestion();

      const choices = [correct_answer, ...incorrect_answers];
      shuffle(choices);

      const now = new Date().toISOString();

      const playerQuestion = {
        id: v4(),
        created_at: now,
        updated_at: now,
        player_id: playerId,
        category,
        difficulty,
        question,
        choices: JSON.stringify(choices),
        correct_answer: choices.indexOf(correct_answer),
      };

      await db("player_questions").insert(playerQuestion);

      const response = new GetQuestionResponse()
        .setId(playerQuestion.id)
        .setCategory(playerQuestion.category)
        .setDifficulty(playerQuestion.difficulty)
        .setQuestion(playerQuestion.question)
        .setChoicesList(choices);

      callback(null, response);
    })();
  },

  answerQuestion: (
    { request }: ServerUnaryCall<AnswerQuestionRequest, AnswerQuestionResponse>,
    callback: sendUnaryData<AnswerQuestionResponse>
  ): void => {
    (async () => {
      const id = request.getId();
      const answer = request.getAnswer();

      const playerQuestion = await db("player_questions").where("id", "=", id).first();

      if (!playerQuestion) {
        callback({
          code: status.NOT_FOUND,
          message: `Question not found`,
        });

        return;
      }

      const givenAnswer = JSON.parse(playerQuestion.choices).indexOf(answer);

      const correct = givenAnswer === playerQuestion.correct_answer;

      const now = new Date();
      const timeElapsed = Math.floor(
        (now.getTime() - new Date(playerQuestion.created_at).getTime()) / 1000
      );

      await db("player_questions")
        .where("id", "=", id)
        .update({ updated_at: now.toISOString(), given_answer: givenAnswer });

      const response = new AnswerQuestionResponse().setCorrect(correct).setTimeElapsed(timeElapsed);
      callback(null, response);
    })();
  },
};

// https://stackoverflow.com/a/2450976
const shuffle = (values: string[]) => {
  let currentIndex = values.length;
  let randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [values[currentIndex], values[randomIndex]] = [values[randomIndex], values[currentIndex]];
  }
};
