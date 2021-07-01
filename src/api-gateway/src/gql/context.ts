import { ChannelCredentials } from "@grpc/grpc-js";
import { promisify } from "util";

import { IPlayerClient, PlayerClient } from "../../../../protos/api/player_grpc_pb";
import { IRankClient, RankClient } from "../../../../protos/api/rank_grpc_pb";

export interface IContext {
  playerClient: PlayerClient;
  rankClient: RankClient;
}

export const context = (): IContext => {
  const playerClient = new PlayerClient(
    process.env.PLAYER_SERVICE_ADDRESS!,
    ChannelCredentials.createInsecure()
  );

  const rankClient = new RankClient(
    process.env.RANK_SERVICE_ADDRESS!,
    ChannelCredentials.createInsecure()
  );

  return {
    playerClient,
    rankClient,
  };
};
