import express  from "express";
import { getDeviceValue, addNewDevice, updateDevice, deleteDevice } from "../controller/device.js";
const deviceRouter = express.Router();

deviceRouter.get('/device', getDeviceValue);
deviceRouter.post('/device', addNewDevice);
deviceRouter.put('/device/:id', updateDevice);
deviceRouter.delete('/device/:id', deleteDevice);

export default deviceRouter;