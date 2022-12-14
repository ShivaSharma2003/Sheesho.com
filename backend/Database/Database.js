const mongoose = require("mongoose");

const DatabaseConnection = () => {
  mongoose.connect(process.env.DATABASE_KEY, () => {
    console.log("Successfully Connected to Database");
  });
};

module.exports = DatabaseConnection;
