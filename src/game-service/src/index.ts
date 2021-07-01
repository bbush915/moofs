import { Server, ServerCredentials } from "@grpc/grpc-js";
import { config } from "dotenv";

import { GameService } from "../../../protos/api/game_grpc_pb";
import { GameServerImpl } from "./game.server";

const main = () => {
  config();

  const server = new Server();

  server.addService(GameService, GameServerImpl);

  const address = `${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`;

  server.bindAsync(address, ServerCredentials.createInsecure(), () => {
    console.info(`🚀 Service available at http://${address}`);
    server.start();
  });
};

main();
