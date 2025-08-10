#! /usr/bin/env node

require("dotenv").config();

const { Client } = require("pg");

const { SHOULD_RUN_LOCALLY, PG_USER, PG_PASS, DATABASE_URL } = process.env;

const SQL = `
CREATE TABLE IF NOT EXISTS categories (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT,
  description TEXT
);

INSERT INTO categories (name, description) 
VALUES
  ('Trees', 'Fruit trees, ornamentals like Japanese maples, and landscaping trees.'),
  ('Vegetables', 'Primarily annual vegetables sold as starts, some perennials like yacón.'),
  ('Ornamental annuals', 'Annual flowers, decorative shrubs, and landscaping herbs like rosemary.'),
  ('Houseplants', 'Plants well-suited to grow indoors.'),
  ('Ferns', 'Plants that reproduce with spores and typically have feathery foliage.');

CREATE TABLE IF NOT EXISTS items (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT,
  description TEXT,
  categories INTEGER[],
  quantity INTEGER,
  price_cents INTEGER
);

INSERT INTO items (name, description, categories, quantity, price_cents) 
VALUES
  ('Meyer lemon', 'Sweet lemon cross with a unique flavour', '{1}', 3, 1055),
  ('Howard Pippin apple', 'Excellent early apple', '{1}', 2, 1055),
  ('Moonglow pear', 'Not as good as Warren', '{1}', 5, 1055),
  ('Sungold tomato', 'Extremely sweet cherry tomato: vigorous and productive. Bears early. F1 hybrid.', '{2}', 3, 599),
  ('Ping tung long eggplant', 'Purple and white Asian eggplant with great flavour and no bitterness', '{1}', 2, 655),
  ('Sparkler corn', 'Sweet corn perfect for eating off the cob or freezing for winter.', '{1}', 5, 155),
  ('Sweet sultan', 'Unique and unusual pink and white flower', '{3}', 3, 599),
  ('Galaxy bachelors buttons', 'Dark purple flowers mottled with blue are one of the most striking bachelors buttons weve seen.', '{2, 3}', 2, 555),
  ('Red flax', 'Sweet pink-red flowers on long stems. Great in a wildflower mix', '{3}', 5, 455);
`;

async function main() {
  console.log("seeding...");
  const connectionString = SHOULD_RUN_LOCALLY
    ? `postgresql://${PG_USER}:${PG_PASS}@localhost:5432/inventory`
    : DATABASE_URL;
  const client = new Client({
    connectionString: connectionString,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
