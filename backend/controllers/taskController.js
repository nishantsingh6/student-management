const Task = require("../models/Task");


//get all tasks
exports.getTasks = async (req, res) => {

  const tasks = await Task.find().populate("student");

  res.json(tasks);
};


//create a new task

exports.assignTask = async (req, res) => {
  try {

    const task = new Task(req.body);

    await task.save();

    res.json(task);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update task
exports.markComplete = async (req, res) => {

  const task = await Task.findByIdAndUpdate(
    req.params.id,
    { completed: true },
    { new: true }
  );

  res.json(task);
};

//delete task
exports.deleteTask = async(req,res)=>{

    try{

        await Task.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message:"Task deleted successfully"
        });

    }catch(error){

        res.status(500).json({
            message:"Error deleting task",
            error:error.message
        });

    }

}