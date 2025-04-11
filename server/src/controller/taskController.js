import { Task } from "../model/taskModel.js";

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);

    return res.status(201).json({ msg: "Task Created Successfully", task });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

const getAllTask = async (req, res) => {
  try {
    //to do add pagination
    const allTask = await Task.find();

    if (allTask.length === 0) {
      return res.status(404).json({ msg: "No Task Found" });
    }

    return res.status(200).json({ msg: "All Task", allTask });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({ msg: "No Task Found" });
    }

    return res.status(200).json({ msg: "Task Found", task });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

const upadateExistingTask = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedTask = await Task.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedTask) {
      return res.status(404).json({ msg: "No Task Found" });
    }

    return res
      .status(200)
      .json({ msg: "Task Updated Successfully", updatedTask });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ msg: "No Task Found" });
    }

    return res.status(200).json({ msg: "Task Deleted Successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

const updateTaskStatus = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedTask = await Task.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedTask) {
      return res.status(404).json({ msg: "No Task Found" });
    }

    return res
      .status(200)
      .json({ msg: "Task Updated Successfully", updatedTask });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

export {
  createTask,
  getAllTask,
  getTaskById,
  upadateExistingTask,
  deleteTask,
  updateTaskStatus,
};
