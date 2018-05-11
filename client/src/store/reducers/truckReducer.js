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

        default: 
            return state;
    }
}


export default truckReducer;