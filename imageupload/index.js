require("dotenv").config();
const express = require("express");
const multer = require("multer");
const cors = require("cors");
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// multer image upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload/images/profile");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.get("/", upload.single("avatar"), function (req, res) {
  res.send(`/upload/images/profile/${req.file.filename}`);
});

// show static file
app.use("/upload", express.static("upload"));

port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`image server at ${port}`);
});
