const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/,
    },
    password: {
      type: String,
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    gender: {
      type: String,
      required: false,
    },
    country: {
      type: String,
      required: false,
    },
    state: {
      type: String,
      required: false,
    },
    location: {
      type: String,
      required: false,
    },
    job: {
      type: String,
      required: false,
    },
    about: {
      type: String,
      required: false,
    },
    company: {
      type: String,
      required: false,
    },
    dob: {
      type: String,
      required: false,
    },
    education: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      minLength: 10,
      maxLength: 11,
      required: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("UserInfo", UserSchema);

module.exports = User;
