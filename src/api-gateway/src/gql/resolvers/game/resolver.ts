import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { promisify } from "util";

import {
  AnswerQuestionRequest,
  AnswerQuestionResponse,
  GetQuestionRequest,
  GetQuestionResponse,
} from "../../../../../../protos/api/game_pb";
import { GrantPointsRequest, GrantPointsResponse } from "../../../../../../protos/api/rank_pb";
import { IContext } from "../../context";
import * as schema from "./schema";

@Resolver(schema.Game)
export class GameResolver {
  @Mutation(() => schema.GetQuestionResponse)
  async getQuestion(
    @Arg("input") { playerId }: schema.GetQuestionInput,
    @Ctx() { gameClient }: IContext
  ): Promise<schema.GetQuestionResponse> {
    const request = new GetQuestionRequest().setPlayerId(playerId);

    const response = await promisify<GetQuestionRequest, GetQuestionResponse>(
      gameClient.getQuestion.bind(gameClient)
    )(request);

    return {
      id: response.getId(),
      category: response.getCategory(),
      difficulty: response.getDifficulty(),
      question: response.getQuestion(),
      choices: response.getChoicesList(),
    };
  }

  @Mutation(() => schema.AnswerQuestionResponse)
  async answerQuestion(
    @Arg("input") { playerId, questionId, answer }: schema.AnswerQuestionInput,
    @Ctx() { gameClient, rankClient }: IContext
  ): Promise<schema.AnswerQuestionResponse> {
    const gameRequest = new AnswerQuestionRequest().setId(questionId).setAnswer(answer);

    const gameResponse = await promisify<AnswerQuestionRequest, AnswerQuestionResponse>(
      gameClient.answerQuestion.bind(gameClient)
    )(gameRequest);

    const timeElapsed = gameResponse.getTimeElapsed();
    let pointsEarned = 0;

    if (gameResponse.getCorrect()) {
      if (timeElapsed < 10) {
        pointsEarned = 50;
      } else if (timeElapsed < 15) {
        pointsEarned = 25;
      } else {
        pointsEarned = 10;
      }

      const rankRequest = new GrantPointsRequest().setPlayerId(playerId).setValue(pointsEarned);

      await promisify<GrantPointsRequest, GrantPointsResponse>(
        rankClient.grantPoints.bind(rankClient)
      )(rankRequest);
    }

    return {
      correct: gameResponse.getCorrect(),
      timeElapsed,
      pointsEarned,
    };
  }
}
