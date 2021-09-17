const express = require("express");
require("express-async-errors");
const app = express();
const { errorHandler } = require("./middlewares");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/test", (req, res) => {
  res.send("test passed");
});

app.use(errorHandler);

module.exports = app;