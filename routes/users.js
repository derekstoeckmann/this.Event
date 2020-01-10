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
  .get(Validate, getUsers)
  .post(createUser);

router
  .route("/:id")
  .get(Validate, getUser)
  .put(Validate, updateUser)
  .delete(Validate, deleteUser);

router.route("/:id/hosting").get(Validate, getUserEventsHosting);

router.route("/:id/attending").get(Validate, getUserEventsAttending);

module.exports = router;
