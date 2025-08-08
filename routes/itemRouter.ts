const { Router } = require("express");
const itemController = require("../controllers/itemController.ts");
const itemRouter = Router();

itemRouter.get("/:item_id", itemController.getItem);
itemRouter.get("/:item_id/edit", itemController.editGet);
itemRouter.post("/:item_id/edit", itemController.editPost);
itemRouter.get("/create", itemController.createGet);
itemRouter.post("/create", itemController.createPost);

module.exports = itemRouter;
