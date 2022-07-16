import express  from "express";
import { getAllUser, register, login, updateUser, deleteUser } from "../controller/user.js";
const userRouter = express.Router();

userRouter.get('/', getAllUser)
userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

export default userRouter;