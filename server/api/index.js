const express = require("express");
const router = express.Router();
const path = require("path");

const authMiddleware = require("../middleware/auth");
const auth = require("./auth");
const users = require("./users");
const images = require("./images");
const country = require("./country");

router.use("/auth", auth);
router.use("/users", authMiddleware, users);
router.use("/images", authMiddleware, images);
router.use("/country", country);
router.use(
  "/uploads",
  express.static(path.join(__dirname, "..", "..", "uploads"))
);

module.exports = router;
