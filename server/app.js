require('dotenv').config();
const PORT        = process.env.PORT || 9009;
const bodyParser  = require('body-parser');
const mongoose    = require('mongoose');
const cors        = require('cors');
const express     = require('express');
const Jobs        = require('./models/job.js');
const Trucks      = require('./models/truck.js');
const truckRoutes = require('./routes/truck');
const jobRoutes   = require('./routes/job');

const app         = express();

// ===== MONGOOSE ===== //
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URI);


// ===== MIDDLEWARES ===== //
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// ===== ROUTES ===== //
app.use( '/api', truckRoutes );
app.use( '/job', jobRoutes )


app.listen(PORT, () => console.log('Starting on ' + PORT))


