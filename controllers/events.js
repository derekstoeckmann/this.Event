const Event = require("../models/Event");

// @desc    Get all events
// @route   GET /api/events
exports.getEvents = (req, res, next) => {
  res.status(200).json({ success: true, message: "Get all events" });
};

// @desc    Get single event
// @route   GET /api/events/:id
exports.getEvent = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Get event with id ${req.params.id}` });
};

// @desc    Create event
// @route   POST /api/events
exports.createEvent = async (req, res, next) => {
  const event = await Event.create(req.body);

  res.status(201).json({ success: true, data: event });
};

// @desc    Update event
// @route   PUT /api/events/:id
exports.updateEvent = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Update event with id ${req.params.id}` });
};

// @desc    Delete event
// @route   DELETE /api/events/:id
exports.deleteEvent = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Delete event with id ${req.params.id}` });
};
