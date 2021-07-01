import { Server, ServerCredentials } from "@grpc/grpc-js";
import { config } from "dotenv";

import { RankService } from "../../../protos/api/rank_grpc_pb";
import { RankServerImpl } from "./rank.server";

const main = () => {
  config();

  const server = new Server();

  server.addService(RankService, RankServerImpl);

  const address = `${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`;

  server.bindAsync(address, ServerCredentials.createInsecure(), () => {
    console.info(`🚀 Service available at http://${address}`);
    server.start();
  });
};

main();
