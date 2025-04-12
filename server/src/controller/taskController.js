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
    const sort = req.query.sort || "-createdAt";
    const limit = parseInt(req.query.limit) || 3;
    const page = parseInt(req.query.page) || 1;
    const status = req.query.status || "";

    const skip = (page - 1) * limit;

    // dynamic filter
    const query = {};
    if (status) query.status = status;

    const totalTasks = await Task.countDocuments(query);
    const totalPages = Math.ceil(totalTasks / limit);

    const allTask = await Task.find(query)
      .sort(sort)
      .skip(skip)
      .limit(limit);

    return res.status(200).json({
      msg: "All Tasks",
      tasks: allTask,
      pagination: {
        totalTasks,
        totalPages,
        currentPage: page,
        perPage: limit,
      }
    });
    
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
