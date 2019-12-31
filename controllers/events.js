const Event = require("../models/Event");
const Post = require("../models/Post");

// @desc    Get all events
// @route   GET /api/events
exports.getEvents = async (req, res, next) => {
  const stringifiedQuery = JSON.stringify(req.query);
  const formattedQuery = stringifiedQuery.replace(
    /\b(gt|gte|lt|lte|in)\b/,
    match => `$${match}`
  );
  const parsedQuery = JSON.parse(formattedQuery);
  const events = await Event.find(parsedQuery).populate("createdBy");

  res.status(200).json({ success: true, count: events.length, data: events });
};

// @desc    Get single event
// @route   GET /api/events/:id
exports.getEvent = async (req, res, next) => {
  const event = await Event.findById(req.params.id).populate("createdBy");

  res.status(200).json({ success: true, data: event });
};

// @desc    Get single event's attending users
// @route   GET /api/events/:id/attending
exports.getEventAttending = async (req, res, next) => {
  const { attending } = await Event.findById(req.params.id)
    .select("attending")
    .populate("attending", "firstName lastName");

  res
    .status(200)
    .json({ success: true, count: attending.length, data: attending });
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

exports.getEventPosts = async (req, res, next) => {
  const posts = await Post.find({ parentEvent: req.params.id }).populate(
    "author",
    "firstName lastName"
  );

  res.status(200).json({ success: true, count: posts.length, data: posts });
};

exports.getEventPost = async (req, res, next) => {
  const post = await Post.findById(req.params.postid);

  res.status(200).json({ success: true, data: post });
};

exports.createEventPost = async (req, res, next) => {
  const post = await Post.create({ ...req.body, parentEvent: req.params.id });

  res.status(201).json({ success: true, data: post });
};

exports.updateEventPost = async (req, res, next) => {
  const post = await Post.findByIdAndUpdate(req.params.postid, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({ success: true, data: post });
};

exports.deleteEventPost = async (req, res, next) => {
  const post = await Post.findByIdAndDelete(req.params.postid);

  res.status(200).json({ success: true, data: {} });
};
