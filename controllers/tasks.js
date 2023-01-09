const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    if (tasks.length == 0) {
      return res.status(200).json({ msg: "No task available" });
    }
    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    return res.status(201).json(task);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getSingleTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No task found with id ${taskID}` });
    }
    return res.status(200).json(task);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateTask = (req, res) => {
  res.send("UPDATE TASK");
};

const deleteTask = (req, res) => {
  res.send("DELETE TASK");
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
