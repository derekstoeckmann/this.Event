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
    bio: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", UserSchema);
