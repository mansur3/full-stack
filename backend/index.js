const express = require("express");
require("dotenv").config();
const app = express();

app.get("/test", async (req, res) => {
  return res.status(200).send({
    message: "Welcome to the world!",
  });
});

app.listen(process.env.PORT || 2233, async (req, res) => {
  console.log("Listening on port " + 2233);
});
