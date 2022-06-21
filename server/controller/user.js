import User from '../model/userModel.js';

export const getAllUser = async (req, res) =>{
    try {
        const allUser = await User.find();
        res.json({
            success: true,
            message: 'Successful',
            content: allUser
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

export const addNewUser = async (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone,
        password: req.body.password
    })
    try {
        const savedUser = await newUser.save();
        res.json({
            success: true,
            message: 'Successful',
            content:savedUser
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

export const deleteUser = async (req, res) => {
    try {
        const id = req.body._id;
        const removedUser = await User.deleteOne({_id: id})
        res.json({
            success: true,
            message: "Successful",
            content: removedUser
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

export const updateUser = async (req, res) => {
    try {
        const id = req.body._id;
        const modifiedUser = req.body;
        await User.updateOne({ _id: id }, { $set: modifiedUser });
        res.json({
          success: true,
          data: modifiedUser,
        });
      } catch (err) {
        res.json({
          success: false,
          message: "Failed to modified",
        });
      }
}

