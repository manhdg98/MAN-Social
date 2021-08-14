const express = require("express");
const mongoose = require("mongoose");
const { User, imgUser } = require("@db");
const router = express.Router();

if (process.env.NODE_ENV !== "production") {
  mongoose.set("debug", true);
}

router.get("/friends", async (req, res) => {
  let { userName } = req.query;
  if (!userName) {
    res.send({
      message: "User name not exist",
    });
    return;
  }

  userName = userName.replaceAll("\\", "");
  const users = await User.find({
    username: { $regex: userName },
  });

  let mergeObj = [];

  users.forEach(async (user) => {
    const avatar = await imgUser
      .find({
        type: "avatar",
        fileId: user._id,
      })
      .sort({ createdAt: -1 })
      .limit(1);

    if (!avatar[0]) {
      avatar.push({
        filePath:
          "https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?ezimgfmt=rs:254x254/rscb2",
      });
    }

    mergeObj.push({
      ...user._doc,
      ...{ filePath: avatar[0].filePath },
    });

    if (mergeObj.length === users.length) {
      res.send(mergeObj);
    }
  });
});

module.exports = router;
