import { config } from "dotenv";
import express from "express";
import "reflect-metadata";

import { getServer } from "./gql";

const main = async () => {
  config();

  const app = express();

  const server = await getServer();
  await server.start();

  server.applyMiddleware({ app });

  const address = `${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`;

  app.listen(process.env.SERVER_PORT, () => {
    console.info(`🚀 Server available at http://${address}${server.graphqlPath}`);
  });
};

main();
