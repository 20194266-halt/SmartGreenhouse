import GreenHouse from '../model/greenHouseModel.js';
import express from 'express';
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
