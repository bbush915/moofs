import { Field, ID, InputType, ObjectType } from "type-graphql";

@ObjectType()
export class Game {}

@InputType()
export class GetQuestionInput {
  @Field(() => ID)
  playerId: string;
}

@ObjectType()
export class GetQuestionResponse {
  @Field(() => ID)
  id: string;

  @Field()
  category: string;

  @Field()
  difficulty: string;

  @Field()
  question: string;

  @Field(() => [String])
  choices: string[];
}

@InputType()
export class AnswerQuestionInput {
  @Field(() => ID)
  playerId: string;

  @Field(() => ID)
  questionId: string;

  @Field()
  answer: string;
}

@ObjectType()
export class AnswerQuestionResponse {
  @Field()
  correct: boolean;

  @Field()
  timeElapsed: number;

  @Field()
  pointsEarned: number;
}
