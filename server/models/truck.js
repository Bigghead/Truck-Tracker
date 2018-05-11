const mongoose = require('mongoose');

const TruckSchema = mongoose.Schema( {
    truckName: { 
        type: String,
        required: true
    },
    startTime: { 
        type: Number,
        required: true
    },
    endTime: { 
        type: Number,
        required: true
    }
} )


const Trucks = mongoose.model('Truck', TruckSchema);

module.exports = Trucks;