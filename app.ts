const express = require("express");
const app = express();

app.set("view engine", "pug");
app.use(express.urlencoded({ extended: true }));

app.use("/", (req, res) => res.send("Hit the express server."));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}`));
