const mongoose = require("mongoose");

const connectToDatabase = async () => {
  const connection = await mongoose.connect(
    "mongodb://localhost/event_app_db",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );

  console.log(`MongoDB connected to ${connection.connection.host}.`);
};

module.exports = connectToDatabase;
