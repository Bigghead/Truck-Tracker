import * as actions from './actions';

const getTrucks = () => {

    return async ( dispatch ) => {

        try {

            const response = await fetch('http://localhost:9009/api/trucks')
            const payload     = await response.json();
            return dispatch( {
                type: actions.GET_TRUCKS,
                payload 
            } );
    
        } catch( e ) { console.log( e ); }

    }
}

export default getTrucks