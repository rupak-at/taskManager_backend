import { Task } from "../model/taskModel.js"

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)

        return res.status(201).json({msg:"Task Created Successfully", task})
    } catch (error) {
        console.error(error)
        return res.status(500).json({msg: "Internal Server Error"})
    }
}

const getAllTask = async(req, res) => {
    try {

        //to do add pagination
        const allTask = await Task.find()

        if (allTask.length === 0) {
            return res.status(404).json({msg: "No Task Found"})
        }

        return res.status(200).json({msg: "All Task", allTask})
    } catch (error) {
        console.error(error)
        return res.status(500).json({msg: "Internal Server Error"})
    }
}

export {createTask, getAllTask}