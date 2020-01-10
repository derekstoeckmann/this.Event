const express = require("express");
const { Validate } = require("./IsAuthenticated")
const {
  getEvents,
  getEvent,
  getEventAttending,
  getEventsNear,
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
  .get(getEvents, Validate)
  .post(createEvent, Validate);

router.route("/near").get(getEventsNear, Validate);

router
  .route("/:id")
  .get(getEvent, Validate)
  .put(updateEvent, Validate)
  .delete(deleteEvent, Validate);

router.route("/:id/attending").get(getEventAttending, Validate);

router
  .route("/:id/posts")
  .get(getEventPosts, Validate)
  .post(createEventPost, Validate);

router
  .route("/:id/posts/:postid")
  .get(getEventPost, Validate)
  .put(updateEventPost, Validate)
  .delete(deleteEventPost, Validate);

module.exports = router;
