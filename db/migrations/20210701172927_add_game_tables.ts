import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("player_questions", (tableBuilder) => {
    tableBuilder.uuid("id").primary().notNullable();
    tableBuilder.timestamps();
    tableBuilder.uuid("player_id").notNullable().references("id").inTable("players");
    tableBuilder.string("category").notNullable();
    tableBuilder.string("difficulty").notNullable();
    tableBuilder.string("question").notNullable();
    tableBuilder.string("choices").notNullable();
    tableBuilder.integer("correct_answer").notNullable();
    tableBuilder.integer("given_answer").nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("player_questions");
}
