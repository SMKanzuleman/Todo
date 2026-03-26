require("dns").setServers(["8.8.8.8", "8.8.4.4"]);
const mongoose = require("mongoose");
require("dotenv").config();

const dbURL = process.env.MONGODB_URL;
const connectDb = async () => {
  await mongoose
    .connect(dbURL)
    .then(() => {
      console.log("MongoDB Atlas connected.Congrats!!!❤️");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDb;
