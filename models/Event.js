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
    time: {
      type: Date,
      required: true
    },
    streetAddress: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    zip: {
      type: String,
      required: true
    },
    attending: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ],
    public: Boolean,
    tags: [String],
    category: {
      type: String,
      required: true,
      enum: [
        "Outdoor/Adventure",
        "Technology",
        "Family",
        "Health/Wellness",
        "Sports/Fitness",
        "Learning",
        "Photography",
        "Food/Drink",
        "Writing",
        "Language/Culture",
        "Music",
        "Movements",
        "LGBTQ",
        "Film",
        "Sci-Fi/Games",
        "Beliefs",
        "Arts",
        "Book Clubs",
        "Dance",
        "Pets",
        "Hobbies/Crafts",
        "Fashion/Beauty",
        "Social",
        "Career/Business"
      ]
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Event", EventSchema);
