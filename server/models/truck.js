const mongoose = require('mongoose');

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
    jobs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : 'Job'
        }
    ],
    reservations: [
        { 
            from: Number,
            to  : Number
        }
    ]
} )


const Trucks = mongoose.model('Truck', TruckSchema);

module.exports = Trucks;