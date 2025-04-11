import {
  TaskCreationValidationSchema,
  updatingTaskStatusValidationSchema,
  updatingTaskValidationSchema,
} from "../utils/VaildatioSchema.js";

const validateTaskCreationData = (req, res, next) => {
  try {
    const { error } = TaskCreationValidationSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ msg: error?.details[0].message });
    }
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

const updatingTaskDataValidation = (req, res, next) => {
  try {
    //checking if body is empty
    if (!req.body) {
      return res.status(400).json({ msg: "No Data Found For Updating Task" });
    }
    const { error } = updatingTaskValidationSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ msg: error?.details[0].message });
    }
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

const updatingTaskStatusValidation = (req, res, next) => {
  try {
    if (!req.body) {
      return res
        .status(400)
        .json({ msg: "No Data Found For Updating Task Status" });
    }

    const { error } = updatingTaskStatusValidationSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ msg: error?.details[0].message });
    }
    next();
  } catch (error) {
    console.log(error);
    return res.statu(500).json({ msg: "Internal Server Error" });
  }
};

export {
  validateTaskCreationData,
  updatingTaskDataValidation,
  updatingTaskStatusValidation,
};
