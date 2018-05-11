const Trucks = require('../models/truck');
const router = require('express').Router();


router.get( '/trucks', async ( req, res ) => {

    try {
    
        const trucks = await Trucks.find( {} );
        res.status(200).json(trucks)    

    } catch ( e ) { console.log( e ); }

} );


router.post( '/truck', async ( req, res ) => {

    const { truckName, startTime, endTime } = req.body;

    try {

        const newTruck = await Trucks.create( { truckName, startTime, endTime } );
        res.status(200).json(newTruck)

    } catch( e ) { console.log( e ); }
} );


module.exports = router;


