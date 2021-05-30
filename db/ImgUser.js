const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const imgUserSchema = new Schema(
  {
    fileName: {
      type: String,
    },
    filePath: {
      type: String,
    },
    fileType: {
      type: String,
    },
    fileSize: {
      type: String,
    },
    fileId: {
      type: String,
    },
    type: {
      type: String,
    },
    imgTimelines: [Object],
  },
  { timestamps: true }
);

module.exports = mongoose.model("imgUser", imgUserSchema);
