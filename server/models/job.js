const mongoose = require('mongoose');

const JobSchema = mongoose.Schema( {
    personName: { 
        type    : String,
        required: true
    },
    moveDate: { 
        type    : String,
        required: true
    },
    from: { 
        type    : Number,
        required: true
    },
    to: { 
        type    : Number,
        required: true
    }
} );

// const Jobs = mongoose.model('Job', JobSchema);

module.exports = JobSchema;