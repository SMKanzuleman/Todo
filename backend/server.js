const dns = require("node:dns/promises");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const cors = require("cors");
const Task = require("./models/task.model");
const taskRoute = require("./routes/task.route");
const connectDB = require("./db/db");
const dotenv = require("dotenv").config();

const app = express();
const PORT = process.env.BACKEND_PORT || 5000;

//!Middlewares
app.use(cors());
app.use(express.json());
app.use("/tasks", taskRoute);
console.log("frontend conneted");

//! Database Connection
connectDB().then(() => {
  app.listen(PORT, (req, res) => {
    console.log(`Server is Running on port ${PORT}`);
  });
});

//!APIs
app.get("/", (req, res) => {
  res.send("Loading");
});
