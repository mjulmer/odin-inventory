const inventoryDb = require("../db/dataLayer.ts");

async function getCategory(req, res) {
  const { category, categoryItems } =
    await inventoryDb.getCategoryDetailsAndItems(req.params.category_id);
  res.render("displayCategory", {
    category: category,
    categoryItems: categoryItems,
  });
}

async function editGet(req, res) {
  const { category, categoryItems } =
    await inventoryDb.getCategoryDetailsAndItems(req.params.category_id);
  res.render("editCategory", {
    id: req.params.category_id,
    name: category.name,
    desc: category.description,
  });
}

async function editPost(req, res) {
  inventoryDb.editCategory(
    req.params.category_id,
    req.body.name,
    req.body.desc
  );
  res.redirect("/");
}

async function createGet(req, res) {
  res.render("newCategory");
}

async function createPost(req, res) {
  inventoryDb.addCategory(req.body.name, req.body.desc);
  res.redirect("/");
}

module.exports = {
  getCategory,
  editGet,
  editPost,
  createGet,
  createPost,
};
