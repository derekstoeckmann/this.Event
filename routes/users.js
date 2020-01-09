const express = require("express");
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getUserEventsHosting
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

module.exports = router;
