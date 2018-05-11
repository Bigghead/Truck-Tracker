require('dotenv').config();
const PORT        = process.env.PORT || 9009;
const bodyParser  = require('body-parser');
const mongoose    = require('mongoose');
const cors        = require('cors');
const path        = require('path');
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
app.use( '/job', jobRoutes );


app.use(express.static('../client/build'));	+// Express will serve up the index.html file if it doesn't recognize the route
app.get( '*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'));
} );
app.listen(PORT, () => console.log('Starting on ' + PORT))


