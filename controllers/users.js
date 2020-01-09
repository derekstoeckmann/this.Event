const User = require("../models/User");
const Event = require("../models/Event");

// @desc    Get all users
// @route   GET /api/users
exports.getUsers = async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({ success: true, count: users.length, data: users });
};

// @desc    Get single user
// @route   GET /api/users/:id
exports.getUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.status(200).json({ success: true, data: user });
};

// @desc    Get all events user is hosting
// @route   GET /api/users/:id/hosting
exports.getUserEventsHosting = async (req, res, next) => {
  const events = await Event.find({ user: req.params.id });

  res.status(200).json({ success: true, count: events.length, data: events });
};

// @desc    Get all events user is attending
// @route   GET /api/users/:id/attending
exports.getUserEventsAttending = async (req, res, next) => {
  const events = await Event.find({ attending: { $in: [req.params.id] } });

  res.status(200).json({ success: true, count: events.length, data: events });
};

// @desc    Create user
// @route   POST /api/users
exports.createUser = async (req, res, next) => {
  const user = await User.create(req.body);

  res.status(201).json({ success: true, data: user });
};

// @desc    Update user
// @route   PUT /api/users/:id
exports.updateUser = async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({ success: true, data: user });
};

// @desc    Delete user
// @route   DELETE /api/users/:id
exports.deleteUser = async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.id);

  res.status(200).json({ success: true, data: {} });
};
