"use strict";
const { imgUser } = require("@db");

const singleFileUpload = async (req, res, next) => {
  try {
    const { type, file_id } = req.body;
    const file = new imgUser({
      fileName: req.file.originalname,
      filePath: req.file.path,
      fileType: req.file.mimetype,
      fileSize: fileSizeFormatter(req.file.size, 2), // 0.00,
      type: type,
      fileId: file_id,
    });
    await file.save();
    res.status(201).send("File Uploaded Successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getSingleFiles = async (req, res, next) => {
  try {
    const { type, file_id } = req.body;
    const files = await imgUser
      .find({
        type: type,
        fileId: file_id,
      })
      .sort({ createdAt: -1 })
      .limit(1);
    res.status(200).send(files);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllSingleFiles = async (req, res, next) => {
  try {
    const { type, file_id } = req.body;
    const files = await imgUser.find({
      type: type,
      fileId: file_id,
    });
    res.status(200).send(files);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const imgTimelineUploads = async (req, res, next) => {
  try {
    let filesArray = [];
    const { type, file_id } = req.body;
    req.files.forEach((element) => {
      const file = {
        fileName: element.originalname,
        filePath: element.path,
        fileType: element.mimetype,
        fileSize: fileSizeFormatter(element.size, 2),
      };
      filesArray.push(file);
    });
    const multipleFiles = new imgUser({
      imgTimelines: filesArray,
      type: type,
      fileId: file_id,
    });
    await multipleFiles.save();
    res.status(201).send("Files Uploaded Successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getImgTimeLine = async (req, res, next) => {
  try {
    const { type, file_id } = req.query;
    let files = await imgUser
      .find({
        type: type,
        fileId: file_id,
      })
      .sort({ createdAt: -1 })
      .limit(1);
    res.status(200).send(files);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllImgTimeLine = async (req, res, next) => {
  try {
    const { type, file_id } = req.query;
    let files = await imgUser.find({
      type: type,
      fileId: file_id,
    });
    res.status(200).send(files);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const fileSizeFormatter = (bytes, decimal) => {
  if (bytes === 0) {
    return "0 Bytes";
  }
  const dm = decimal || 2;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "YB", "ZB"];
  const index = Math.floor(Math.log(bytes) / Math.log(1000));
  return (
    parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + " " + sizes[index]
  );
};

module.exports = {
  singleFileUpload,
  getSingleFiles,
  getAllSingleFiles,
  imgTimelineUploads,
  getImgTimeLine,
  getAllImgTimeLine,
};
