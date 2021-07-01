import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("ranks", (tableBuilder) => {
    tableBuilder.uuid("id").primary().notNullable();
    tableBuilder.timestamps();
    tableBuilder.integer("level").notNullable();
    tableBuilder.string("name").notNullable();
    tableBuilder.integer("cost").notNullable();
  });

  await knex.schema.createTable("player_ranks", (tableBuilder) => {
    tableBuilder.uuid("id").primary().notNullable();
    tableBuilder.timestamps();
    tableBuilder.uuid("player_id").notNullable().references("id").inTable("players");
    tableBuilder.uuid("rank_id").notNullable().references("id").inTable("ranks");
    tableBuilder.integer("points").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("player_ranks");
  await knex.schema.dropTable("ranks");
}
