const mongoose = require('mongoose');

const JobSchema = mongoose.Schema( {
    personName: { 
        type    : String,
        required: true
    },
    dateOfMove: { 
        type    : Date,
        required: true
    },
    timeOfMove: { 
        type    : Number,
        required: true
    },
    lengthOfMove: { 
        type    : Number,
        required: true
    }
} );

const Jobs = mongoose.model('Job', JobSchema);

module.exports = Jobs;