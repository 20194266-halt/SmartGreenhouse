import Device from '../model/deviceModel.js';

export const getDeviceValue = async (req, res) => {
    try {
        const user = await Device.findById(req.params.id);
        res.json({
            success: true,
            message: "Successfull",
            content: user
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
    const newDevice = new User({
        name: req.body.name,
        status: req.body.status, 
        type: req.body.type,
        value: req.body.value, 
        greenHouseId: req.body.getUserById
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

export const updateDevice = async (req, res) => {
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
          message: "Failed to modified",
        });
      }
}

