import User from '../model/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

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

export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
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

export const register =  (req, res) => {
    bcrypt.hash(req.body.password, 10, async function(err, hashedPass) {
        if(err) {
            res.json({
                error: err
            })
        }
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            address: req.body.address,
            phone: req.body.phone,
            password: hashedPass
        })
        try {
            const savedUser = await newUser.save();
            res.json({
                success: true,
                message: 'Add user Successful',
                content:savedUser
            })
        }
        catch (err) {
            res.json({
                success: false,
                message: 'Add user not succesful',
                content: err
            })
        }
    })
    
}

export const login = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    
    User.findOne({$or: [{email: email}]})
    .then(user => {
        if(user) {
            bcrypt.compare(password, user.password, function(err, result) {
                if(err) {
                    res.json({
                        error: err
                    })
                }
                if(result) {
                    let token = jwt.sign({email: user.email}, 'verySecretValue', {expiresIn: '1h'})
                    res.json({
                        message: 'Login successful'
                    })
                } else {
                    res.json({
                        message: 'Password does not matched!'
                    })
                }
            })
        } else {
            res.json({
                message: 'No user found!'
            })
        }
    })
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

