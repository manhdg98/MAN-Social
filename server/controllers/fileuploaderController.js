"use strict";
const { imgUser } = require("@db");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "manteam",
  api_key: "998254271125192",
  api_secret: "yfMsXKFUW0VIR_y54u9qjmhZnAw",
});

const singleFileUpload = async (req, res, next) => {
  try {
    const { type, file_id } = req.body;
    const { originalname, path, mimetype } = req.file;
    await cloudinary.uploader.upload(
      path,
      {
        folder: `uploads/${file_id}/${type}`,
        use_filename: true,
      },
      async (error, result) => {
        if (result) {
          const file = new imgUser({
            fileName: originalname,
            filePath: result.url,
            fileType: mimetype,
            fileSize: fileSizeFormatter(req.file.size, 2), // 0.00,
            type: type,
            fileId: file_id,
          });
          await file.save();
          res.status(201).send({
            path: result.url,
            message: "File Uploaded Successfully",
          });
        } else {
          console.log({ message: "image upload fail", error });
        }
      }
    );
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getSingleFiles = async (req, res, next) => {
  try {
    const { type, file_id } = req.query;
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
    const { type, file_id } = req.query;
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
    let filePath;
    const { type, file_id } = req.body;
    await req.files.forEach(async (element, index) => {
      await cloudinary.uploader.upload(
        element.path,
        {
          folder: `uploads/${file_id}/${type}`,
          use_filename: true,
        },
        function (error, result) {
          if (result) {
            filePath = result.url;
          } else {
            console.log({ message: "image upload fail", error });
          }
        }
      );

      const file = {
        fileName: element.originalname,
        filePath: filePath,
        fileType: element.mimetype,
        fileSize: fileSizeFormatter(element.size, 2),
      };

      filesArray.push(file);
      if (filesArray.length === req.files.length) {
        const multipleFiles = new imgUser({
          imgTimelines: filesArray,
          type: type,
          fileId: file_id,
        });
        await multipleFiles.save();
      }
    });

    res.status(201).send({
      message: "Files Uploaded Successfully",
    });
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
