import React from 'react';

export const makeTimes = () => {
        
    const times = [ 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21 ];
    
    return times.map( ( t, index ) => {
        return <option defaultValue={ index === 0 } 
                       key={t} 
                       value={t}
                       >{ parseTime( t ) }</option>;
    } );
}


export const parseTime = ( time ) => {
    return time < 12 
        ? `${ time.toString() } am`
        : `${ ( time === 12 ? time : time - 12 ).toString() } pm`
}


export const postData = async ( url, bodyObj ) => {
    
    try {
        
        const response = await fetch( url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify( bodyObj )
        } ).then( res => {
            if (!res.ok) {
              switch( res.status ){
                    case 401:
                        throw Error('Unauthorized')
                    case 406: 
                        throw Error('No trucks are available');
                    default:
                        throw Error('Unknown error');
              }
            }
            return res;
        } );

        const data = await response.json();
        return data;
    
    } catch ( e ) { alert( e ); } 
}