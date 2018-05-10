const initialState = {
    trucks: []
}


const truckReducer = ( state = initialState, actions ) => {

    switch( action.type ) {

        case 'GET_TRUCKS':
            return {
                ...state,
                trucks: [ ...action.payload ]
            }
    }
}


export default truckReducer;