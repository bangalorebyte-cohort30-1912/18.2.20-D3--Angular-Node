const express = require("express");
const app = express();
app.set("views", "./views");
app.set("view engine", "pug");

const port = 3000;

app.get("/", function(req, res) {
  res.render("index", { title: "Hey", message: "Hello there!" });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
