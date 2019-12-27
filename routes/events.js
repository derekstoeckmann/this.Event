const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "Get all events" });
});

router.get("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: `Get event with id ${req.params.id}` });
});

router.post("/", (req, res) => {
  res.status(200).json({ success: true, message: "Create new event" });
});

router.put("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: `Update event with id ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: `Delete event with id ${req.params.id}` });
});

module.exports = router;
