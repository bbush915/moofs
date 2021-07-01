import { Knex } from "knex";

const ranks = [
  { id: "2b5c7d21-9cd6-4b55-bc0d-7cb4dfd5ed77", level: 1, name: "Canner", cost: 0 },
  { id: "14b66fa8-56a3-409d-8954-05f2ade40972", level: 2, name: "Cutter", cost: 100 },
  { id: "2885adf3-70f9-48f4-b938-659ee4e24786", level: 3, name: "Utility", cost: 200 },
  { id: "1374ae4d-d114-48af-a94b-f4b155e734ea", level: 4, name: "Commercial", cost: 400 },
  { id: "7cfe74f5-34c3-4c96-9c9e-d483f8190038", level: 5, name: "Standard", cost: 800 },
  { id: "5308486f-9617-4b45-9cca-5302a3140154", level: 6, name: "Select", cost: 1600 },
  { id: "6e6c8ac6-1550-4eb0-afb2-eca95cbb619a", level: 7, name: "Choice", cost: 3200 },
  { id: "40b5775f-9d9b-4ab9-a879-12d8ae4e128f", level: 8, name: "Prime", cost: 6400 },
];

export async function seed(knex: Knex): Promise<void> {
  const now = new Date().toISOString();

  await knex("ranks").insert(
    ranks.map((rank) => ({
      created_at: now,
      updated_at: now,
      ...rank,
    }))
  );
}
