import GreenHouse from '../model/greenHouseModel.js';

export const getAllGreenHouse = async (req, res) =>{
    try {
        const greenHouses = await GreenHouse.find();
        res.json({
            success: true,
            message: 'Successful',
            content: greenHouses
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
export const addNewGreenHouse = async (req, res) => {
    const newGreenHouse = new GreenHouse({
        name: req.body.name,
        address: req.body.address,
        areage: req.body.areage,
        userId: req.user.id
    })
    try {
        const savedGreenHouse = await newGreenHouse.save();
        res.json({
            success: true,
            message: 'Successful',
            content:savedGreenHouse
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
export const deleteGreenHouse = async (req, res) => {
    try {
        const id = req.body._id;
        const removedGreenHouse = await GreenHouse.deleteOne({_id: id})
        res.json({
            success: true,
            message: "Successful",
            content: removedGreenHouse
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

export const updateGreenHouse = async (req, res) => {
    try {
        const id = req.body._id;
        const modifiedGreenHouse = req.body;
        await GreenHouse.updateOne({ _id: id }, { $set: modifiedGreenHouse });
        res.json({
          success: true,
          data: modifiedGreenHouse,
        });
      } catch (err) {
        res.json({
          success: false,
          message: "Failed to modified",
        });
      }
}