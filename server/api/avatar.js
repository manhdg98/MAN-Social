const express = require("express");
const mongoose = require("mongoose");

const {
  singleFileUpload,
  getallSingleFiles,
} = require("../controllers/fileuploaderController");

const router = express.Router();
const { upload } = require("../utils/filehelper");

if (process.env.NODE_ENV !== "production") {
  mongoose.set("debug", true);
}

router.post("/singleFile", upload.single("file"), singleFileUpload);
router.route("/getSingleFiles").get(getallSingleFiles);
module.exports = router;
