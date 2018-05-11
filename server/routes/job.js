const Trucks = require('../models/truck');
const Jobs   = require('../models/job');
const router = require('express').Router();


router.post( '/', async ( req, res ) => {

    const { personName, moveDate, startTime: start, endTime: end } = req.body;
    console.log( { start, end } )
    try {

        // ===== filter only available trucks ===== //

        let trucks = await Trucks.find( {

            // starts earlier or at same time as requested
            startTime: { $lte: start },
    
            // ends later than or at same time as the end of the move 
            endTime  : { $gte: start + end },

            // give all the trucks that don't have bookings first
            $or: [
                { reservations: [] },  // maybe? Not sure
                {
                    $and: [
                        { reservations: {
                            $not: {
                                $elemMatch: {
                                    from: { $lt: end }, 
                                    to: { $gt: start }
                                }
                            }
                        } }
                    ]
                }
            ]
        } );
        
        // if( trucks.length === 0 ) {
        //     trucks = await Trucks.find( {
        //         reservations: {
        //             $not: {
        //                 $elemMatch: {
        //                     from: { $lt: end }, 
        //                     to: { $gt: start }
        //                 }
        //             }
        //         }
        //     } )
        // }
        console.log( trucks );

    } catch ( err ) {
        res.status(400).json(err);
    }

} );


module.exports = router;