const Trucks = require('../models/truck');
const Jobs   = require('../models/job');
const router = require('express').Router();


router.post( '/', async ( req, res ) => {

    try {
        
    } catch ( err ) {
        res.status(400).json(err);
    }

} )