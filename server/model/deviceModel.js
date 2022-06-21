const mongooes = require('mongoose');

const deviceSchema = mongooes.Schema({
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
        require: true
    }, 
    greenHouseId: {
        type: mongooes.Schema.Types.ObjectId,
        require: true,
        ref: 'GreenHouse'
    }
})

const Device = mongooes.Schema('Device', deviceSchema);

module.exports() = Device;
