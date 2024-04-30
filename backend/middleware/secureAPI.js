require("dotenv").config();
const secureAPI = (req, res, next) => {
  if (req.headers.authorization === "TeEW3B93guUofdP") {
    next();
  } else {
    res.status(401).send({ error: "Unauthorize API Call" });
  }
};

module.exports = secureAPI;
