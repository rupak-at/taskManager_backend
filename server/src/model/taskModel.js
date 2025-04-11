import { Schema, model } from "mongoose";

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum:["pending", "completed", "in-progress"],
        default: "pending"
    },
}, {timestamps: true});

export const Task = model("Task", taskSchema);