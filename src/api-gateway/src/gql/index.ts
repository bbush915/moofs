import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

import { context } from "./context";
import { resolvers } from "./resolvers";

export const getServer = async () => {
  const schema = await buildSchema({ resolvers });

  const server = new ApolloServer({
    context,
    schema,
  });

  return server;
};
