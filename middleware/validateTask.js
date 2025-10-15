import Joi from "joi";

const taskSchema = Joi.object({
  name: Joi.string().max(150),
  completed: Joi.boolean(),
}).or("name", "completed");

const validateTask = (req, res, next) => {
  const { error } = taskSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      status: "fail",
      message: error.details[0].message,
    });
  }
  next();
};

export default validateTask;
