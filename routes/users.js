const express = require("express");
const { Validate } = require("./IsAuthenticated")
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getUserEventsHosting,
  getUserEventsAttending
} = require("../controllers/users");

const router = express.Router();

router
  .route("/")
  .get(getUsers, Validate)
  .post(createUser, Validate);

router
  .route("/:id")
  .get(getUser, Validate)
  .put(updateUser, Validate)
  .delete(deleteUser, Validate);

router.route("/:id/hosting").get(getUserEventsHosting);

router.route("/:id/attending").get(getUserEventsAttending);

module.exports = router;
