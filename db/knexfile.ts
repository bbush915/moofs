import { Knex } from "knex";

const configuration: Knex.Config = {
  client: "sqlite3",

  connection: {
    filename: "/Users/bbush/Documents/Source/moofs/db/moofs.db",
  } as Knex.Sqlite3ConnectionConfig,

  useNullAsDefault: true,

  migrations: {
    directory: "./migrations",
    tableName: "knex_migrations",
  },

  seeds: {
    directory: "./seeds",
  },
};

export default configuration;
