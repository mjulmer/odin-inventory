const inventoryDb = require("../db/dataLayer.ts");
const utils = require("../utils/utils.ts");

async function getItem(req, res) {
  const item = await inventoryDb.getItemDetails(req.params.item_id);
  res.render("displayItem", {
    item: item,
    centsToPriceString: utils.centsToPriceStringWithDollarSign,
  });
}

async function editGet(req, res) {
  // Yes, I should get both promises and then render the page once they've
  // completed rather than waterfalling them.
  const item = await inventoryDb.getItemDetails(req.params.item_id);
  const categories = await inventoryDb.getCategories();
  res.render("editItem", {
    item: item,
    categories: categories,
    centsToPriceString: utils.centsToPriceStringNoUnit,
  });
}

async function editPost(req, res) {
  const categories = Array.isArray(req.body.categories)
    ? req.body.categories
    : [req.body.categories];
  inventoryDb.editItem(
    req.params.item_id,
    req.body.name,
    req.body.desc,
    categories,
    req.body.price,
    req.body.quantity
  );
  res.redirect("/item/" + req.params.item_id);
}

async function createGet(req, res) {
  const categories = await inventoryDb.getCategories();
  res.render("createItem", { categories });
}

async function createPost(req, res) {
  const categories = Array.isArray(req.body.categories)
    ? req.body.categories
    : [req.body.categories];
  const { rows } = await inventoryDb.addItem(
    req.body.name,
    req.body.desc,
    categories,
    req.body.price,
    req.body.quantity
  );
  const newItemId = rows[0].id;
  res.redirect("/item/" + newItemId);
}

async function deleteItem(req, res) {
  console.log("DELETE");
  await inventoryDb.deleteItem(req.params.item_id);
  res.redirect("/");
}

module.exports = {
  getItem,
  editGet,
  editPost,
  createGet,
  createPost,
  deleteItem,
};
