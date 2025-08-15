const pool = require("./pool.ts");
const utils = require("../utils/utils.ts");

async function getCategories() {
  const { rows } = await pool.query("SELECT * FROM categories");
  return rows;
}

async function getCategoryDetailsAndItems(categoryId: number) {
  const categoryQueryResult = await pool.query(`SELECT * FROM categories 
    WHERE id = ${categoryId}`);

  const itemQueryResult = await pool.query(`SELECT * FROM items 
    WHERE ${categoryId} = ANY(categories)`);

  console.log({
    result: categoryQueryResult.rows,
    items: itemQueryResult.rows,
  });

  return {
    category: categoryQueryResult.rows[0],
    categoryItems: itemQueryResult.rows,
  };
}

async function getItemDetails(itemId: number) {
  const { rows } = await pool.query(`SELECT * FROM items WHERE id = ${itemId}`);
  return rows[0];
}

async function addCategory(name, desc) {
  await pool.query(`INSERT INTO categories (name, description) 
    VALUES ('${name}', '${desc}')`);
}

async function editCategory(id, name, desc) {
  await pool.query(`UPDATE categories SET name = '${name}', description = '${desc}' 
    WHERE id = ${id}`);
}

async function addItem(
  name: string,
  desc: string,
  categories: Array<number>,
  price: string,
  quantity: number
) {
  return await pool.query(`INSERT INTO items (name, description, categories, quantity, price_cents)
    VALUES (
    '${name}',
    '${desc}',
    '{${categories.join(", ")}}',
    ${quantity},
    ${utils.priceStringToPriceInCents(price)})
    RETURNING id`);
}

async function editItem(
  id: string,
  name: string,
  desc: string,
  categories: Array<number>,
  price: string,
  quantity: number
) {
  await pool.query(`UPDATE items SET
      name = '${name}',
      description = '${desc}',
      categories = '{${categories.join(", ")}}',
      quantity = ${quantity},
      price_cents = ${utils.priceStringToPriceInCents(price)}
      WHERE id = ${id}`);
}

module.exports = {
  getCategories,
  getCategoryDetailsAndItems,
  getItemDetails,
  addCategory,
  editCategory,
  addItem,
  editItem,
};
