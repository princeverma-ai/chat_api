const express = require("express");
const Router = require("./routes/Router");
const app = express();

// middlewares
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// routes middleware----------------------------------------------------------
app.use("/", Router);

module.exports = app;
