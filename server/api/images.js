const express = require("express");
const mongoose = require("mongoose");
const {
  singleFileUpload,
  getSingleFiles,
  getAllSingleFiles,
  imgTimelineUploads,
  getImgTimeLine,
  getAllImgTimeLine,
} = require("../controllers/fileuploaderController");
const router = express.Router();
const { upload } = require("../utils/filehelper");

if (process.env.NODE_ENV !== "production") {
  mongoose.set("debug", true);
}

router.post("/singleFile", upload.single("file"), singleFileUpload);
router.route("/getSingleFiles").get(getSingleFiles);
router.route("/getAllSingleFiles").get(getAllSingleFiles);
router.post("/imgTimelineUploads", upload.array("files"), imgTimelineUploads);
router.get("/imgTimeLines", getImgTimeLine);
router.get("/allImgTimeLines", getAllImgTimeLine);

module.exports = router;
