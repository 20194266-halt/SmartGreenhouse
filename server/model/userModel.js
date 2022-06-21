import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true, 
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true
    }, 
    address: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    password:{
        type: String,
        trim: true
    } 
})
const User = mongoose.model('User', userSchema);
export default User;