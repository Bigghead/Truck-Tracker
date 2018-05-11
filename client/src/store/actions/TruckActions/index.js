import * as actions from '../actions';

export const getTrucks = () => {

    return async ( dispatch ) => {

        try {

            const response = await fetch('http://localhost:9009/api/trucks')
            const payload  = await response.json();
            return dispatch( {
                type: actions.GET_TRUCKS,
                payload 
            } );
    
        } catch( e ) { console.log( e ); }

    }
}

export const addTruck = ( truckObj ) => {

    const { truckName, startTime, endTime } = truckObj;
    return async ( dispatch ) => {

        try {

            const response = await fetch( 'http://localhost:9009/api/truck', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify( {
                    truckName,
                    startTime,
                    endTime
                } )
            } );
            const payload  = await response.json();
            return dispatch( {
                type: actions.ADD_TRUCK,
                payload 
            } );
    
        } catch( e ) { console.log( e ); }

    }
}