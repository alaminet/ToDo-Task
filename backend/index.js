require("dotenv").config();
const express = require("express");
const route = require("./route");
const cors = require("cors");
const mongoConfig = require("./config/mongoConfig");
const app = express();

// dbconnection
mongoConfig();

// middleware
app.use(cors());
app.use(express.json());

// api router
app.use(process.env.API_URL, route);

app.get("/", function (req, res) {
  res.send("Hello World");
});

// port connection
port = process.env.PORT || 8000;
app.listen(port, (req, res) => {
  console.log(`Server Run at ${port}`);
});
