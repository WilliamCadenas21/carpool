import {
    CREATE_NEW_TRAVEL,
    FETCH_TRAVEL
} from '../actions/types';

const INITIAL_STATE =
    [
    ];

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_NEW_TRAVEL:
            return [...state, action.payload];
        case FETCH_TRAVEL:
            return action.payload;  // bring all new object
        default:
            return state;
    }
};
