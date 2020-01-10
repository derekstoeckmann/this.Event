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
  .get(Validate, getEvents)
  .post(Validate, createEvent);

router.route("/near").get(Validate, getEventsNear);

router
  .route("/:id")
  .get(Validate, getEvent)
  .put(Validate, updateEvent)
  .delete(Validate, deleteEvent);

router.route("/:id/attending").get(Validate, getEventAttending);

router
  .route("/:id/posts")
  .get(Validate, getEventPosts)
  .post(Validate, createEventPost);

router
  .route("/:id/posts/:postid")
  .get(Validate, getEventPost)
  .put(Validate, updateEventPost)
  .delete(Validate, deleteEventPost);

module.exports = router;
