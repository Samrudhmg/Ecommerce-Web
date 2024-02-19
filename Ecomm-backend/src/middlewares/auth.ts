import { User } from "../models/user.js";
import ErrorHandler from "../utils/utility-class.js";
import { Trycatch } from "./error.js";

//only admin can access the users
export const adminOnly = Trycatch(async (req, res, next) => {
  const { id } = req.query;

  if (!id) return next(new ErrorHandler("Login first", 401));

  const user = await User.findById(id);
  if (!user) return next(new ErrorHandler("user Not valid", 401));
  if (user.role !== "admin")
    return next(new ErrorHandler("You are not allowed", 401));

    next();
});
 