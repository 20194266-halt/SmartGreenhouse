import mongoose from 'mongoose';

const greenHouseSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    }, 
    address: {
        type: String,
        require: true
    },
    areage: {
        type: Number
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    }
})
const GreenHouse = mongoose.model('GreenHouse', greenHouseSchema);
export default GreenHouse;