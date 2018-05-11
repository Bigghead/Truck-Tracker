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
    return time <= 12 
        ? `${ time.toString() } am`
        : `${ ( time - 12 ).toString() } pm`
}