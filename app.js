const express = require("express");
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
const { newRouter } = require("./routes/newRouter");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/new", newRouter);

app.listen(process.env.PORT, (err) => console.log(`listening at port `));
