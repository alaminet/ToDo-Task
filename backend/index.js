require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

port = process.env.PORT || 8000;
app.listen(port, (req, res) => {
  console.log(`Server Run at ${port}`);
});
