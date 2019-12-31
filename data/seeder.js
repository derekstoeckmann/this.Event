const fs = require("fs");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/event_app_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

const User = require("../models/User");
const Event = require("../models/Event");
const Post = require("../models/Post");

const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, "utf-8"));
const events = JSON.parse(fs.readFileSync(`${__dirname}/events.json`, "utf-8"));
const posts = JSON.parse(fs.readFileSync(`${__dirname}/posts.json`, "utf-8"));

const importData = async () => {
  try {
    await User.create(users);
    await Event.create(events);
    await Post.create(posts);

    console.log("Data imported.");

    process.exit();
  } catch (err) {
    console.error(err);
  }
};

const deleteData = async () => {
  try {
    await User.deleteMany();
    await Event.deleteMany();
    await Post.deleteMany();

    console.log("Data deleted.");

    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === "import") {
  importData();
} else if (process.argv[2] === "delete") {
  deleteData();
}
