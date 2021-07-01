import { Server, ServerCredentials } from "@grpc/grpc-js";
import { config } from "dotenv";

import { PlayerService } from "../../../protos/api/player_grpc_pb";
import { PlayerServerImpl } from "./player.server";

const main = () => {
  config();

  const server = new Server();

  server.addService(PlayerService, PlayerServerImpl);

  const address = `${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`;

  server.bindAsync(address, ServerCredentials.createInsecure(), () => {
    console.info(`🚀 Service available at http://${address}`);
    server.start();
  });
};

main();
