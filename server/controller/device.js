import Device from '../model/deviceModel.js';

export const getDeviceValue = async (req, res) => {
    try {
        const device = await Device.findById(req.params.id);
        res.json({
            success: true,
            message: "Successfull",
            content: device
        })
    }
    catch (err) {
        res.json({
            success: false,
            message: 'Not succesful',
            content: err
        })
    }
}
export const getAllDevice = async (req, res) =>{
    try {
        const allDevice = await Device.find();
        res.json({
            success: true,
            message: 'Successful',
            content: allDevice
        })
    }
    catch(err){
        res.json({
            success: false,
            message: 'Not successful',
            content: err
        })
    }
}

export const getValueOfDevice = async (req, res) => {
    try {
        const id = req.params.id;
        const lastDeviceStatus = await Device.find({_id: id},{status: 1});
        res.json({
            success: true,
            message: "Successfull",
            content: lastDeviceStatus
        })
    }
    catch (err) {
        res.json({
            success: false,
            message: 'Not succesful',
            content: err
        })
    }
}

export const addNewDevice = async (req, res) => {
    const newDevice = new Device({
        name: req.body.name,
        status: req.body.status, 
        type: req.body.type,
        temp: req.body.temp, 
        moiture: req.body.moiture,
        greenHouseId: req.body.greenHouseId
    })
    try {
        const savedDevice = await newDevice.save();
        res.json({
            success: true,
            message: 'Successful',
            content: savedDevice
        })
    }
    catch (err) {
        res.json({
            success: false,
            message: 'Not succesful',
            content: err
        })
    }
}

export const deleteDevice = async (req, res) => {
    try {
        const id = req.body.id;
        const removedDevice = await Device.deleteOne({_id: id})
        res.json({
            success: true,
            message: "Successful",
            content: removedDevice
        })
    }
    catch (err){
        res.json({
            success: false,
            message: "Not successful",
            content: err
        })
    }
}

export const updateDeviceProps = async (req, res) => {
    try {
        const id = req.body.id;
        const modifiedDevice = req.body;
        await Device.updateOne({ _id: id }, { $set: modifiedDevice });
        res.json({
          success: true,
          data: modifiedDevice,
        });
      } catch (err) {
        res.json({
          success: false,
          message: "Failed to modified properties",
        });
      }
}

