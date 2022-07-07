import mongoose from "mongoose";

const deviceSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    status: {
        type: Boolean,
        require: true
    }, 
    type: {
        type: String,
        enum: ['sensor', 'device']
    },
    value: {
        type: Number,
        require: false
    }, 
    greenHouseId: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'GreenHouse'
    }
})

const Device = mongoose.model('Device', deviceSchema);

export default Device
