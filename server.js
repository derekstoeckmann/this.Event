const express = require("express");
const app = express();
const PORT = 3001;
const connectToDatabase = require("./config/db");

// Connect to MongoDB
connectToDatabase();

// API Route files
const events = require("./routes/events");

// API Routes
app.use("/api/events", events);

// This will eventually be the React entrance route
app.get("*", (req, res) => res.send("Hello world!"));

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}.`)
);
