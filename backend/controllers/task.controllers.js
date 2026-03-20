const Task=require("../models/task.model")

const getAllTasks=async(req,res)=>{
  try {
    const tasks=await Task.find({})
    res.status(200).json(tasks)
  } catch (error) {
    res.status(500).json({message:error.message})
  }
}
const getsingleTask=async(req,res)=>{
    try {
      const { id } = req.params;
      const findedTask = await Task.findById(id);
      res.status(200).json(findedTask);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}

const deleteSingleTask=async(req,res)=>{
    try {
      const { id } = req.params;
      const deletedTask = await Task.findByIdAndDelete(id);
      res.status(200).json(deletedTask);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  
}
const deleteAllTasks=async(req,res)=>{
    try {
      const deletedTasks = await Task.deleteMany({});
      res.status(200).json(deletedTasks);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  
}
const createNewTask=async(req,res)=>{
    try {
      const task = Task.create(req.body);
      console.log(task);
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  
}
const updateTask=async(req,res)=>{
    try {
      const { id } = req.params;
      const task = await Task.findByIdAndUpdate(id, req.body);
      console.log(task);
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}

module.exports = { getAllTasks, getsingleTask, deleteSingleTask, deleteAllTasks, createNewTask, updateTask };