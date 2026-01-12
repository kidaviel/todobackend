const { db } = require("../db");

function indexController(req, res) {
  res.render("index", { db: db });
}

module.exports = indexController;
