const { Router } = require("express");
const { renderNew, addNewToDo } = require("../controllers/newController");

const newRouter = Router();

newRouter.get("/", renderNew);
newRouter.post("/", addNewToDo);

module.exports = { newRouter };
