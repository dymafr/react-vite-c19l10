const express = require("express");
const cookie = require("cookie-parser");

const app = express();
const routes = require("./routes");
app.use(cookie());
app.use(express.json());

require("./database");

app.use(routes);

app.use(function (req, res, next) {
  res.status(404).json("mauvaise routes");
});

app.listen(3001);
