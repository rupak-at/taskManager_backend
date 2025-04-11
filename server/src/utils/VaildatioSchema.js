import Joi from "joi";

const TaskCreationValidationSchema = Joi.object({
    title: Joi.string().required().min(3).max(25),
    description: Joi.string().required().min(5),
})


export {TaskCreationValidationSchema}