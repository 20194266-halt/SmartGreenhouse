import express  from "express";
import { getAllGreenHouse, addNewGreenHouse } from "../controller/greenhouse.js";
const greenHouseRouter = express.Router();

greenHouseRouter.get('/', getAllGreenHouse);
greenHouseRouter.post('/', addNewGreenHouse);
greenHouseRouter.put();
greenHouseRouter.delete()



export default router;