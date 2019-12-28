const Event = require("../models/Event");

// @desc    Get all events
// @route   GET /api/events
exports.getEvents = async (req, res, next) => {
  const events = await Event.find();

  res.status(200).json({ success: true, data: events });
};

// @desc    Get single event
// @route   GET /api/events/:id
exports.getEvent = async (req, res, next) => {
  const event = await Event.findById(req.params.id);

  res.status(200).json({ success: true, data: event });
};

// @desc    Create event
// @route   POST /api/events
exports.createEvent = async (req, res, next) => {
  const event = await Event.create(req.body);

  res.status(201).json({ success: true, data: event });
};

// @desc    Update event
// @route   PUT /api/events/:id
exports.updateEvent = async (req, res, next) => {
  const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({ success: true, data: event });
};

// @desc    Delete event
// @route   DELETE /api/events/:id
exports.deleteEvent = async (req, res, next) => {
  const event = await Event.findByIdAndDelete(req.params.id);

  res.status(200).json({ success: true, data: {} });
};
