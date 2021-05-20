const express = require("express");
const router = express.Router();
const path = require("path");

const authMiddleware = require("../middleware/auth");
const auth = require("./auth");
const users = require("./users");
const avatar = require("./avatar");

router.use("/auth", auth);
router.use("/users", users);
router.use("/avatar", avatar);
router.use(
  "/uploads",
  express.static(path.join(__dirname, "..", "..", "uploads"))
);

module.exports = router;
