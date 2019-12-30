const express = require("express");
const {
  getEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
  getEventPosts,
  getEventPost,
  createEventPost,
  updateEventPost,
  deleteEventPost
} = require("../controllers/events");

const router = express.Router();

router
  .route("/")
  .get(getEvents)
  .post(createEvent);

router
  .route("/:id")
  .get(getEvent)
  .put(updateEvent)
  .delete(deleteEvent);

router
  .route("/:id/posts")
  .get(getEventPosts)
  .post(createEventPost);

router
  .route("/:id/posts/:postid")
  .get(getEventPost)
  .put(updateEventPost)
  .delete(deleteEventPost);

module.exports = router;
