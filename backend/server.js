const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const Task = require("./models/task.model");
const taskRoute = require("./routes/task.route");
const connectDB = require("./db/db");
require("dotenv").config();

const app = express();

//!Middlewares
app.use(express.json());
app.use("/tasks", taskRoute);

//!Securety
const PORT = process.env.BACKEND_PORT || 5000;

//!APIs
app.get("/", (req, res) => {
  res.send("Loading");
});

//!Database Connection
connectDB().then(() => {
  app.listen(PORT, (req, res) => {
    console.log(`Server is Running on port ${PORT}`);
  });
});
