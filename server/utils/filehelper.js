"use strict";
const multer = require("multer");
const fs = require("fs-extra");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const { type, file_id } = req.body;
    if (fs.existsSync(`uploads/${file_id}`)) {
      if (fs.existsSync(`uploads/${file_id}/${type}`)) {
        cb(null, `uploads/${file_id}/${type}`);
      } else {
        fs.mkdirSync(`uploads/${file_id}/${type}`);
        cb(null, `uploads/${file_id}/${type}`);
      }
    } else {
      fs.mkdirSync(`uploads/${file_id}`);
      fs.mkdirSync(`uploads/${file_id}/${type}`);
      cb(null, `uploads/${file_id}/${type}`);
    }
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    );
  },
});
const filefilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage: storage, fileFilter: filefilter });

module.exports = { upload };
