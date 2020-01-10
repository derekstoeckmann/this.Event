require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;
const connectToDatabase = require("./config/db");
const events = require("./routes/events");
const users = require("./routes/users");
const protected = require("./routes/protected");

// Middleware
app.use(express.json());

// Router
app.use("/api/events", events);
app.use("/api/users", users);
app.use("/", protected);

app.use(express.static("client/build"));

// This will eventually be the React entrance route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

connectToDatabase();

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}.`)
);
