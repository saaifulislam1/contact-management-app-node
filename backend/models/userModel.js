const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      require: [true, "Please add a username"],
    },
    email: {
      type: String,
      require: [true, "Please add the user Email"],
      unique: [true, "Email alreary exist"],
    },
    password: {
      type: String,
      require: [true, "Please Add the user Password"],
    },
    // image: {
    //   type: String, // Store the filename or URL of the image
    //   required: [true, "Please upload a profile image"], // Make image upload mandatory
    // },
  },
  { timestamps: true }
);
module.exports = mongoose.model("user", userSchema);
