import {
    CREATE_NEW_TRAVEL,
    FETCH_TRAVEL
} from '../actions/types';

const INITIAL_STATE =
    [
        {
            id: '0',
            driver: 'William Cadenas',
            hour: '9:20',
            starting: 'Calle 52 #32-27',
            arrival: 'UN',
            vehicle: 'Kia picanto'
        },
    ];

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_NEW_TRAVEL:
            return [...state, ...action.payload];
        case FETCH_TRAVEL:
            return [...state, ...action.payload];  // bring all new object
        default:
            return state;
    }
};
