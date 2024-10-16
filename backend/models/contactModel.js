const mongoose = require("mongoose");
// so now, I will be adding the contact Schema,

const contactSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    name: {
      type: String,
      required: [true, "Please add the contact name"],
    },
    email: { type: String, required: [true, "Please add the contact email"] },
    phone: { type: String, required: [true, "Please add the contact phone"] },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Contact", contactSchema);
