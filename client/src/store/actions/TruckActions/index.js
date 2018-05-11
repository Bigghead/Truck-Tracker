import * as actions from '../actions';
import { postData } from '../../../helpers/index'

export const getTrucks = () => {

    return async ( dispatch ) => {

        try {

            const response = await fetch('http://localhost:9009/api/trucks')
            const payload  = await response.json();
            payload.forEach( res => {
                res.reservations = res.reservations.sort( ( a, b ) => a.from > b.from )
            } )
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

            const payload = await postData( 'http://localhost:9009/api/truck', {
                truckName,
                startTime,
                endTime
            } );
            return dispatch( {
                type: actions.ADD_TRUCK,
                payload 
            } );
    
        } catch( e ) { console.log( e ); }

    }
}