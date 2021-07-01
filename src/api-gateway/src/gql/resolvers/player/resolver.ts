import { Arg, Ctx, ID, Mutation, Query, Resolver } from "type-graphql";
import { promisify } from "util";

import {
  GetPlayerRequest,
  GetPlayerResponse,
  RegisterPlayerRequest,
  RegisterPlayerResponse,
} from "../../../../../../protos/api/player_pb";
import { InitRankRequest, InitRankResponse } from "../../../../../../protos/api/rank_pb";
import { IContext } from "../../context";
import { Player, RegisterPlayerInput } from "./schema";

@Resolver(Player)
export class PlayerResolver {
  @Query(() => Player)
  async player(@Arg("id") id: string, @Ctx() { playerClient }: IContext): Promise<Player> {
    const request = new GetPlayerRequest().setId(id);

    const response = await promisify<GetPlayerRequest, GetPlayerResponse>(
      playerClient.getPlayer.bind(playerClient)
    )(request);

    const player: Player = {
      id: response.getId(),
      createdAt: new Date(response.getCreatedAt()),
      updatedAt: new Date(response.getUpdatedAt()),
      username: response.getUsername(),
    };

    return player;
  }

  @Mutation(() => ID)
  async registerPlayer(
    @Arg("input") { username }: RegisterPlayerInput,
    @Ctx() { playerClient, rankClient }: IContext
  ): Promise<string> {
    const playerRequest = new RegisterPlayerRequest().setUsername(username);

    const playerResponse = await promisify<RegisterPlayerRequest, RegisterPlayerResponse>(
      playerClient.registerPlayer.bind(playerClient)
    )(playerRequest);

    const id = playerResponse.getId();

    const rankRequest = new InitRankRequest().setPlayerId(id);

    await promisify<InitRankRequest, InitRankResponse>(rankClient.initRank.bind(rankClient))(
      rankRequest
    );

    return id;
  }
}
