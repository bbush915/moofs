import { Arg, Ctx, ID, Mutation, Query, Resolver } from "type-graphql";
import { promisify } from "util";

import {
  AdvanceRankRequest,
  AdvanceRankResponse,
  GetRankRequest,
  GetRankResponse,
} from "../../../../../../protos/api/rank_pb";
import { IContext } from "../../context";
import { AdvanceRankInput, Rank } from "./schema";

@Resolver(Rank)
export class RankResolver {
  @Query(() => Rank)
  async rank(
    @Arg("playerId", () => ID) playerId: string,
    @Ctx() { rankClient }: IContext
  ): Promise<Rank> {
    const request = new GetRankRequest().setPlayerId(playerId);

    const response = await promisify<GetRankRequest, GetRankResponse>(
      rankClient.getRank.bind(rankClient)
    )(request);

    const rank: Rank = {
      playerId,
      currentRank: response.getCurrentRank(),
      currentPoints: response.getCurrentPoints(),
      nextRank: response.hasNextRank() ? response.getNextRank() : undefined,
      requiredPoints: response.hasRequiredPoints() ? response.getRequiredPoints() : undefined,
    };

    return rank;
  }

  @Mutation(() => Boolean)
  async advanceRank(
    @Arg("input") { playerId }: AdvanceRankInput,
    @Ctx() { rankClient }: IContext
  ): Promise<boolean> {
    const request = new AdvanceRankRequest().setPlayerId(playerId);

    const response = await promisify<AdvanceRankRequest, AdvanceRankResponse>(
      rankClient.advanceRank.bind(rankClient)
    )(request);

    return response.getSuccess();
  }
}
