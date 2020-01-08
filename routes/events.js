const express = require("express");
const {
  getEvents,
  getEvent,
  getEventAttending,
  getEventsWithinRadius,
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

router.route("/radius").get(getEventsWithinRadius);

router
  .route("/:id")
  .get(getEvent)
  .put(updateEvent)
  .delete(deleteEvent);

router.route("/:id/attending").get(getEventAttending);

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
