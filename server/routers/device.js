import express  from "express";
import { getValueOfDevice,getAllDevice, getDeviceValue, addNewDevice, updateDeviceProps, deleteDevice,  } from "../controller/device.js";
const deviceRouter = express.Router();

deviceRouter.get('/', getAllDevice)
deviceRouter.post('/', addNewDevice);
deviceRouter.get('/:id', getDeviceValue);
deviceRouter.put('/:id', updateDeviceProps);
deviceRouter.delete('/:id', deleteDevice);

export default deviceRouter;