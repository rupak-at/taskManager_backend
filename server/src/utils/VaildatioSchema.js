import Joi from "joi";

const TaskCreationValidationSchema = Joi.object({
  title: Joi.string().required().min(3).max(25),
  description: Joi.string().required().min(5),
});

const updatingTaskValidationSchema = Joi.object({
  title: Joi.string().min(3).max(25),
  description: Joi.string().min(5),
  status: Joi.string().valid("pending", "completed", "in-progress"),
}).or("title", "description", "status"); //only one field is ok to update

const updatingTaskStatusValidationSchema = Joi.object({
  status: Joi.string().valid("pending", "completed", "in-progress"),
});

export {
  TaskCreationValidationSchema,
  updatingTaskValidationSchema,
  updatingTaskStatusValidationSchema,
};
