import { TaskCreationValidationSchema } from "../utils/VaildatioSchema.js"

const validateTaskCreationData = ( req, res, next) => {
    try {
       const {error} =  TaskCreationValidationSchema.validate(req.body)
       if (error) {
        return res.status(400).json({msg: error?.details[0].message})
       }
       next()
    } catch (error) {
        console.error(error)
        return res.status(500).json({msg: "Internal Server Error"})
    }
}

export {validateTaskCreationData}