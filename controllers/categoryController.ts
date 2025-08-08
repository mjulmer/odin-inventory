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
  console.log("unimplemented get edit category page: ", req.params.category_id);
}

async function editPost(req, res) {
  console.log("unimplemented POST category edit: ", req.params.category_id);
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
