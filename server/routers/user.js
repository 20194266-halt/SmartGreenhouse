import express  from "express";
import { getAllUser, register, login, updateUser, deleteUser } from "../controller/user.js";
const userRouter = express.Router();

userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.put('/user/:id', updateUser);
userRouter.delete('/user/:id', deleteUser);

export default userRouter;