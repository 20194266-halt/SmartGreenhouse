import express  from "express";
import { getAllGreenHouse, addNewGreenHouse, addDevice, updateGreenHouse, deleteGreenHouse } from "../controller/greenhouse.js";
const greenHouseRouter = express.Router();

greenHouseRouter.get('/', getAllGreenHouse);
greenHouseRouter.post('/', addNewGreenHouse);
greenHouseRouter.put('/add-device', addDevice);
greenHouseRouter.put('/:id',updateGreenHouse );
greenHouseRouter.delete('/:id', deleteGreenHouse)



export default greenHouseRouter;