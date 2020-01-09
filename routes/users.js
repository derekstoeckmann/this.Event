const express = require("express");
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
  .get(getUsers)
  .post(createUser);

router
  .route("/:id")
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

router.route("/:id/hosting").get(getUserEventsHosting);

router.route("/:id/attending").get(getUserEventsAttending);

module.exports = router;
