const Trucks = require('../models/truck');
const Jobs   = require('../models/job');
const router = require('express').Router();


router.post( '/', async ( req, res ) => {

    const { personName, moveDate, startTime: start, endTime: end } = req.body;
    // console.log( req.body )
    try {

        // ===== filter only available trucks ===== //

        let trucks = await Trucks.find( {

            // starts earlier or at same time as requested
            startTime: { $lte: start },
    
            // ends later than or at same time as the end of the move 
            endTime  : { $gte: end },

            
            $or: [
                { reservations: [] },  // give all the trucks that don't have bookings first
                { 
                    reservations: {
                        $not: {
                            $elemMatch: {
                                from: { $lt: end }, 
                                to: { $gt: start }
                            }
                        }
                    } 
                }
            ]
        } );
        
        console.log(trucks);
        // ===== if no trucks, send empty error ===== //
        if( trucks.length === 0 ) throw new Error( 'No trucks are available' );
        
        // ===== update the first truck we get ===== //
        const truck = trucks[0];
        truck.reservations.push( { personName, moveDate, from: start, to: end } );
        truck.markModified('reservations');
        await truck.save();

        res.status(200).json(truck);

    } catch ( err ) {
        console.log(err)
        res.status(400).json(err);
    }

} );


module.exports = router;