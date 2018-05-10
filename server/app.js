require('dotenv').config();
const PORT       = process.env.PORT || 9009;
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');
const cors       = require('cors');
const express    = require('express');
const Jobs       = require('./models/job.js');
const Trucks     = require('./models/truck.js');
const truckRoutes = require('./routes/truck');

const app        = express();

// ===== MONGOOSE ===== //
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URI);

const trucks = [
    { truckName: 'truck 1', dailyStart: 8, dailyEnd: 4 },
    { truckName: 'truck 2', dailyStart: 9, dailyEnd: 5 },
    { truckName: 'truck 3', dailyStart: 8, dailyEnd: 4 },
    { truckName: 'truck 4', dailyStart: 9, dailyEnd: 5 },
    { truckName: 'truck 5', dailyStart: 7, dailyEnd: 3 }   
];


const seedDB = async () => {
    
    try {
        await Trucks.deleteMany( { } );
        await Promise.all( trucks.map( t => {
            const { truckName, dailyStart, dailyEnd } = t;
            return Trucks.create( { truckName, dailyStart, dailyEnd } ) 
        } ) )
    } catch( e ) { console.log(e); }
};


seedDB();


// ===== MIDDLEWARES ===== //
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// ===== ROUTES ===== //
app.use( '/api', truckRoutes )



app.listen(PORT, () => console.log('Starting on ' + PORT))


