const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const imgUserSchema = new Schema(
  {
    fileName: {
      type: String,
      required: true,
    },
    filePath: {
      type: String,
      required: true,
    },
    fileType: {
      type: String,
      required: true,
    },
    fileSize: {
      type: String,
      required: true,
    },
    fileId: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("imgUser", imgUserSchema);
