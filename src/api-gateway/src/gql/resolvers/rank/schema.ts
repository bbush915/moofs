import { Field, ID, InputType, Int, ObjectType } from "type-graphql";

@ObjectType()
export class Rank {
  @Field(() => ID)
  playerId: string;

  @Field()
  currentRank: string;

  @Field(() => Int)
  currentPoints: number;

  @Field({ nullable: true })
  nextRank?: string;

  @Field(() => Int, { nullable: true })
  requiredPoints?: number;
}

@InputType()
export class AdvanceRankInput {
  @Field(() => ID)
  playerId: string;
}
