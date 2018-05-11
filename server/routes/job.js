const Trucks = require('../models/truck');
const Jobs   = require('../models/job');
const router = require('express').Router();


router.post( '/', async ( req, res ) => {

    const { personName, moveDate, moveLength, startTime: start } = req.body;

    try {

        // ===== filter only available trucks ===== //
        const trucks = await Trucks.find( {
            startTime: { $lte: start },
            reservations: {
                $elemMatch: {
                    from: { $lt: start },
                    to  : { $gte: start + moveLength }
                }
            }
        } );
        console.log( trucks );

    } catch ( err ) {
        res.status(400).json(err);
    }

} );


module.exports = router;