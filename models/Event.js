const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    title: {
      type: String,
      required: [true, "Please add a title."],
      trim: true
    },
    description: {
      type: String,
      required: [true, "Please add a description."]
    },
    public: Boolean,
    tags: [String],
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Event", EventSchema);
