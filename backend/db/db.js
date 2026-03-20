const mongoose = require("mongoose");
require("dotenv").config();

const dbURL = process.env.MONGODB_URL;
const connectDb = async () => {
  mongoose
    .connect(dbURL)
    .then(() => {
      console.log("Database connected.Congrats!!!❤️");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDb;
