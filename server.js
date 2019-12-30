const express = require("express");
const app = express();
const PORT = 3001;
const connectToDatabase = require("./config/db");
const events = require("./routes/events");
const users = require("./routes/users");

// Middleware
app.use(express.json());

// Router
app.use("/api/events", events);
app.use("/api/users", users);

// This will eventually be the React entrance route
app.get("*", (req, res) => res.send("Hello world!"));

connectToDatabase();

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}.`)
);
