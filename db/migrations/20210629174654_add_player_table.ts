import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("players", (tableBuilder) => {
    tableBuilder.uuid("id").primary().notNullable();
    tableBuilder.timestamps();
    tableBuilder.string("username").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("players");
}
