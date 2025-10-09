import { customAPIError } from "../errors/custom-errors.js";

const errorHandler = (err, req, res, next) => {
  if (err instanceof customAPIError) {
    return res.status(err.status).json({ msg: err.message });
  }

  return res
    .status(500)
    .json({ msg: "Something went wrong, please try again later." });
};

export default errorHandler;
