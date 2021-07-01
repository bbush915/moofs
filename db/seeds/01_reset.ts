import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  const allowList = ["knex_migrations", "knex_migrations_lock", "sqlite_sequence"];

  const rows = await knex.raw(`SELECT name FROM sqlite_master WHERE type='table'`);

  for (const row of rows) {
    const tableName = row.name;

    if (allowList.includes(tableName)) {
      continue;
    }

    await knex.raw(`DELETE FROM ??`, tableName);
  }
}
