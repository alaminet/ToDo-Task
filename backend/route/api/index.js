const express = require("express");
const route = express.Router();
const authRoute = require("./auth");
const taskRoute = require("./task");

route.use("/auth", authRoute);
route.use("/task", taskRoute);

module.exports = route;
