import { Field, ID, InputType, ObjectType } from "type-graphql";

@ObjectType()
export class Player {
  @Field(() => ID)
  id: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  username: string;
}

@InputType()
export class RegisterPlayerInput {
  @Field()
  username: string;
}
