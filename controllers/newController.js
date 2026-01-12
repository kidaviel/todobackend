const { render } = require("ejs");
const db = require("../db");

function renderNew(req, res) {
  res.render("new");
}

function addNewToDo(req, res) {
  console.log(req.body);
  db.addToDo(req.body.toDo);
  res.redirect("/");
}
module.exports = { renderNew, addNewToDo };
