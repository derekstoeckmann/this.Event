const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true
    },
    lastName: {
      type: String,
      trim: true
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
