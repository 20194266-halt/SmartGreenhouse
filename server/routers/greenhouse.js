import express  from "express";
import { getAllGreenHouse, addNewGreenHouse, updateGreenHouse, deleteGreenHouse } from "../controller/greenhouse.js";
const greenHouseRouter = express.Router();

greenHouseRouter.get('/green-house', getAllGreenHouse);
greenHouseRouter.post('/green-house', addNewGreenHouse);
greenHouseRouter.put('/green-house/:id',updateGreenHouse );
greenHouseRouter.delete('/green-house/:id', deleteGreenHouse)



export default greenHouseRouter;