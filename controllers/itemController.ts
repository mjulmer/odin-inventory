const inventoryDb = require("../db/dataLayer.ts");

async function getItem(req, res) {
  const item = await inventoryDb.getItemDetails(req.params.item_id);
  res.render("displayItem", {
    item: item,
  });
}

async function editGet(req, res) {
  console.log("unimplemented get edit item page: ", req.params.item_id);
}

async function editPost(req, res) {
  console.log("unimplemented POST item edit: ", req.params.item_id);
  res.redirect("/");
}

async function createGet(req, res) {
  const categories = await inventoryDb.getCategories();
  res.render("createItem", { categories });
}

async function createPost(req, res) {
  console.log("Unimplemented POST create new item");
  res.redirect("/");
}

module.exports = {
  getItem,
  editGet,
  editPost,
  createGet,
  createPost,
};
