const { Router } = require("express");
const categoryController = require("../controllers/categoryController.ts");
const categoryRouter = Router();

categoryRouter.get("/create", categoryController.createGet);
categoryRouter.post("/create", categoryController.createPost);
categoryRouter.get("/:category_id", categoryController.getCategory);
categoryRouter.get("/:category_id/edit", categoryController.editGet);
categoryRouter.post("/:category_id/edit", categoryController.editPost);
categoryRouter.post("/:category_id/delete", categoryController.deleteCategory);

module.exports = categoryRouter;
