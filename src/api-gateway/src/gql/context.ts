import { ChannelCredentials } from "@grpc/grpc-js";

import { GameClient } from "../../../../protos/api/game_grpc_pb";
import { PlayerClient } from "../../../../protos/api/player_grpc_pb";
import { RankClient } from "../../../../protos/api/rank_grpc_pb";

export interface IContext {
  gameClient: GameClient;
  playerClient: PlayerClient;
  rankClient: RankClient;
}

export const context = (): IContext => {
  const gameClient = new GameClient(
    process.env.GAME_SERVICE_ADDRESS!,
    ChannelCredentials.createInsecure()
  );

  const playerClient = new PlayerClient(
    process.env.PLAYER_SERVICE_ADDRESS!,
    ChannelCredentials.createInsecure()
  );

  const rankClient = new RankClient(
    process.env.RANK_SERVICE_ADDRESS!,
    ChannelCredentials.createInsecure()
  );

  return {
    gameClient,
    playerClient,
    rankClient,
  };
};
