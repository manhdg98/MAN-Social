// TODO: make /users/:username or email api endpoints

const express = require("express");
const mongoose = require("mongoose");
const { User } = require("@db");
const bcrypt = require("bcrypt");
const { hashPassword } = require("../utils/auth");
const router = express.Router();

if (process.env.NODE_ENV !== "production") {
  mongoose.set("debug", true);
}

router
  .route("/:id/update-password")
  .post(async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    if (newPassword.length >= 8) {
      const { id } = req.params;
      const user = await User.findById(id);
      const isValid = await bcrypt.compare(oldPassword, user.password);
      if (!isValid) {
        res.status(400).send("Invalid Password");
      }
      user.password = await hashPassword(newPassword);
      await user.save();
      res.send(200).send({
        message: "Update password success. ",
      });
    }
  });

router
  .route("/:id/update-info")
  .patch(async (req, res) => {
    const { gender, state, location, job, about, company, dob, email, username, country, education, phone } = req.body;
    console.log(req.body);
    const { id } = req.params;
    const user = await User.findById(id);
    Object.keys(user).map(function(key) {
      
    });
    if (email) user.email = email;
    if (username) user.username = username;
    if (dob) user.dob = dob;
    if (company) user.company = company;
    if (about) user.about = about;
    if (job) user.job = job;
    if (location) user.location = location;
    if (state) user.state = state;
    if (country) user.country = country;
    if (gender) user.gender = gender;
    if (education) user.education = education;
    if (phone) user.phone = phone;
    await user.save();
    res.send(200).send({
      message: "Update password success. ",
    });
  });

router
  .route("/:id")
  .get(async (req, res) => {
    const userId = req.params.id;
    const user = await User.findById(userId);
    res.send(user);
  })
  .patch(async (req, res) => {
    const userId = req.params.id;
    const { username, email } = req.body;
    const user = await User.findById(userId);
    if (email) user.email = email;
    if (username) user.username = username;
    await user.save();
    res.send(201);
  })
  .delete(async (req, res) => {});

router
  .route("/")
  .get(async (req, res) => {
    User.find({}, (err, users) => {
      let userMap = {};
      users.forEach((user) => {
        userMap[user._id] = user;
      });
      res.send(userMap);
    });
  });

module.exports = router;
