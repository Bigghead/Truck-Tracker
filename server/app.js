require('dotenv').config();
const PORT       = process.env.PORT || 9009;
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');
const express    = require('express');

const app        = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URI);

app.listen(PORT, () => console.log('Starting on ' + PORT))


