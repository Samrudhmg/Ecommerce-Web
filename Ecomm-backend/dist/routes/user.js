import express from 'express';
import { getAllUsers, getUser, newUser, deleteUser } from '../controllers/user.js';
import { adminOnly } from '../middlewares/auth.js';
const app = express.Router();
//route to create a new user
app.post("/new", newUser);
// this is to fetch all the users   api/v1/users/all
app.get("/all", adminOnly, getAllUsers);
// // this is to fetch  the required user   api/v1/users/dynamic_Id
// app.get("/:id",getUser)
// // this is to delete particular  user   api/v1/users/dynamic_Id
// app.delete("/:id",deleteUser);
//Routing into one
app.route("/:id").get(getUser).delete(adminOnly, deleteUser);
export default app;
