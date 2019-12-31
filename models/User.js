const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: [true, "Please provide a first name."]
    },
    lastName: {
      type: String,
      trim: true,
      required: [true, "Please provide a last name."]
    },
    email: {
      type: String,
      required: [true, "Please add an email address."],
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid email address."
      ]
    },
    bio: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", UserSchema);
