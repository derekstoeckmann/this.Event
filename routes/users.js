const express = require("express");
const { Validate } = require("./IsAuthenticated")
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
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

module.exports = router;
