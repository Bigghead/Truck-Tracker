const mongoose = require('mongoose');

const TruckSchema = mongoose.Schema( {
    truckName: { 
        type: String,
        required: true
    },
    dailyStart: { 
        type: Number,
        required: true
    },
    dailyEnd: { 
        type: Number,
        required: true
    }
} )


const Trucks = mongoose.model('Truck', TruckSchema);

module.exports = Trucks;