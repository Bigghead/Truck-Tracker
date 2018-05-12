const mongoose  = require('mongoose');
const JobSchema = require('./job'); 

const TruckSchema = mongoose.Schema( {
    truckName: { 
        type    : String,
        required: true
    },
    startTime: { 
        type    : Number,
        required: true
    },
    endTime: { 
        type    : Number,
        required: true
    },
    reservations: [
        {
            type: JobSchema
        }
    ]
} )


const Trucks = mongoose.model('Truck', TruckSchema);

module.exports = Trucks;