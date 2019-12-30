const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    parentEvent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: true
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
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
