const initialState = {
    trucks: []
}


const truckReducer = ( state = initialState, action ) => {

    switch( action.type ) {

        case 'GET_TRUCKS':
            return {
                ...state,
                trucks: [ ...action.payload ]
            }

        default: 
            return state;
    }
}


export default truckReducer;