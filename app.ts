const express = require("express");
const categoryRouter = require("./routes/categoryRouter.ts");
const itemRouter = require("./routes/itemRouter.ts");
const inventoryDb = require("./db/dataLayer.ts");
const app = express();

app.set("view engine", "pug");
app.use(express.urlencoded({ extended: true }));

app.use("/category", categoryRouter);
app.use("/item", itemRouter);
app.use("/", async (req, res) => {
  const categories = await inventoryDb.getCategories();
  res.render("homepage", { categories });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}`));
