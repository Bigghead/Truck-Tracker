require('dotenv').config();
const PORT       = process.env.PORT || 9009;
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');
const express    = require('express');
const Trucks     = require('./models/job');
const Jobs       = require('./models/trucks');

const app        = express();

// ===== MONGOOSE ===== //
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URI);

const trucks = [
    { name: 'truck 1', dailyStart: 8, dailyEnd: 4 },
    { name: 'truck 2', dailyStart: 9, dailyEnd: 5 },
    { name: 'truck 3', dailyStart: 8, dailyEnd: 4 },
    { name: 'truck 4', dailyStart: 9, dailyEnd: 5 },
    { name: 'truck 5', dailyStart: 7, dailyEnd: 3 }   
];


const seedDB = async () => {
    
    try {
        await Promise.all( trucks.map( t => {
            const { name, dailyStart, dailyEnd } = t;
            return Trucks.create( { name, dailyStart, dailyEnd } ) 
        } ) )
    } catch( e ) { console.log(e); }
};


seedDB();


// ===== MIDDLEWARES ===== //
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.listen(PORT, () => console.log('Starting on ' + PORT))


