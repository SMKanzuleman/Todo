const express=require("express")
const router=express.Router()
const {
  getAllTasks,
  getsingleTask,
  deleteSingleTask,
  deleteAllTasks,
  createNewTask,
  updateTask
} = require("../controllers/task.controllers");


//Get all Task

router.get("/",getAllTasks)

//Get a single task

router.get("/:id", getsingleTask)

//Add a new task

router.put("/",createNewTask)

//update single task

router.put("/:id",updateTask)

//Delete a task

router.delete("/:id",deleteSingleTask)

//Delete all tasks

router.delete("/",deleteAllTasks)


module.exports = router;