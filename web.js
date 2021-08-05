const ejs = require("express-ejs-layouts");
const express = require("express");
const app = express();
const fs = require("fs");
const sample = JSON.parse(
  fs.readFileSync(__dirname + "/starting.json", "utf8")
);
const port = process.env.PORT || 9000;
app.use(ejs);
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("board", {
    board: sample,
  });
});
app.get("/position", (req, res) => {
  res.send(sample);
});
app.listen(port, console.log(`Listening on port ${port}`));
