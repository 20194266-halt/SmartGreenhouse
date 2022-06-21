import express  from "express";
import { getAllUser, addNewUser, updateUser, deleteUser } from "../controller/user.js";
const userRouter = express.Router();

userRouter.get('/', getAllUser);
userRouter.post('/', addNewUser);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

export default userRouter;