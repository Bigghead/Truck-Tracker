import * as actions from '../actions/actions';

const initialState = {
    trucks: []
}


const truckReducer = ( state = initialState, action ) => {

    switch( action.type ) {

        case actions.GET_TRUCKS:
            return {
                ...state,
                trucks: [ ...action.payload ]
            }

        case actions.ADD_TRUCK:
            return {
                ...state,
                trucks: [ ...state.trucks, action.payload ]
            }

        case actions.UPDATE_TRUCK:
            return { 
                ...state,
                trucks: state.trucks.map( t => {
                    if( t._id === action.payload._id ) {
                        return {
                            ...t,
                            reservations: [ ...action.payload.reservations ]
                        }
                    } else { 
                        return t;
                    }
                } )
            }

        default: 
            return state;
    }
}


export default truckReducer;