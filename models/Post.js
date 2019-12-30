const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    parentEvent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event"
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    text: {
      type: String,
      required: [true, "Posts must contain text."]
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Post", PostSchema);
