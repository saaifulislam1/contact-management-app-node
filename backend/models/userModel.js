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
  },
  { timestamps: true }
);
module.exports = mongoose.model("user", userSchema);
