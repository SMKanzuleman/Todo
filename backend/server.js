const express = require("express");
const mongoose = require("mongoose");
const axios=require("axios")
const Task=require("./models/task.model")
require("dotenv").config()


const app = express();
app.use(express.json());
const PORT = process.env.BACKEND_PORT || 5000;
const dbURL =process.env.MONGODB_URL; 

//APIs
app.get("/", (req, res) => {
  res.send("Loading");
});

/*-----------------
Adding a new task
------------------*/
app.put("/tasks",async(req,res)=>{
  try {
      const task = Task.create(req.body);
      console.log(task);
      res.status(200).json(task);
  } catch (error) {
    res.status(500).json({message:error.message})    
  }
})

/*-----------------
Getting all tasks
------------------*/
app.get("/tasks", async(req,res)=>{
  try {
    const tasks=await Task.find({})
    console.log(tasks);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({message:error.message})
  }
})

/*-----------------
Getting single task
------------------*/

app.get("/tasks/:id",async(req,res)=>{
  try {
    const {id}=req.params;
    const findedTask=await Task.findById(id)
    res.status(200).json(findedTask)
  } catch (error) {
    res.status(500).json({message:error.message})
  }
})

/*-----------------
Delete single task
------------------*/

app.delete("/tasks/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const deletedTask = await Task.findByIdAndDelete(id);
    res.status(200).json(deletedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/*-----------------
Delete all tasks
------------------*/

app.delete("/tasks", async (req, res) => {
  try {
    const deletedTasks = await Task.deleteMany({});
    res.status(200).json(deletedTasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



mongoose
  .connect(dbURL)
  .then(() => {
    console.log("Database connected.Congrats!!!❤️");
    app.listen(PORT, (req, res) => {
      console.log(`Server is Running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
