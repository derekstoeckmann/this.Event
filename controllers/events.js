const Event = require("../models/Event");
const Post = require("../models/Post");
const IsAuthenticated = require("../routes/IsAuthenticated")

// @desc    Get all events
// @route   GET /api/events
exports.getEvents = async (req, res, next) => {
  const stringifiedQuery = JSON.stringify(req.query);
  const formattedQuery = stringifiedQuery.replace(
    /\b(gt|gte|lt|lte|in)\b/,
    match => `$${match}`
  );
  const parsedQuery = JSON.parse(formattedQuery);
  const events = await Event.find(parsedQuery).populate("user");

  res.status(200).json({ success: true, count: events.length, data: events });
};

// @desc    Get single event
// @route   GET /api/events/:id
exports.getEvent = async (req, res, next) => {
  const event = await Event.findById(req.params.id).populate("user");

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

// @desc    Get event posts
// @route   GET /api/events/:id/posts
exports.getEventPosts = async (req, res, next) => {
  const posts = await Post.find({ event: req.params.id }).populate(
    "user",
    "firstName lastName"
  );

  res.status(200).json({ success: true, count: posts.length, data: posts });
};

// @desc    Get single event post
// @route   GET /api/events/:id/posts/:postid
exports.getEventPost = async (req, res, next) => {
  const post = await Post.findById(req.params.postid);

  res.status(200).json({ success: true, data: post });
};

// @desc    Create event post
// @route   POST /api/events/:id/posts
exports.createEventPost = async (req, res, next) => {
  const post = await Post.create({ ...req.body, event: req.params.id });

  res.status(201).json({ success: true, data: post });
};

// @desc    Update single event post
// @route   PUT /api/events/:id/posts/:postid
exports.updateEventPost = async (req, res, next) => {
  const post = await Post.findByIdAndUpdate(req.params.postid, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({ success: true, data: post });
};

// @desc    Delete single event post
// @route   DELETE /api/events/:id/posts/:postid
exports.deleteEventPost = async (req, res, next) => {
  const post = await Post.findByIdAndDelete(req.params.postid);

  res.status(200).json({ success: true, data: {} });
};

exports.getEventsNear = async (req, res, next) => {
  const { distance, lat, lng } = req.query;

  // Calculate radius using radians
  // Divide distance by radius of Earth
  // Earth's radius = 3,963 mi / 6,378 km
  const radius = distance / 3963;

  const events = await Event.find({
    location: { $geoWithin: { $centerSphere: [[lng, lat], radius] } }
  });

  res.status(200).json({ success: true, count: events.length, data: events });
};
