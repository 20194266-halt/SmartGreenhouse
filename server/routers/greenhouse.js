import express  from "express";
import { getAllGreenHouse } from "../controller/greenhouse.js";
const router = express.Router();

router.get('/', getAllGreenHouse)


export default router;