import {
    CREATE_NEW_TRAVEL,
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
        {
            id: '1',
            driver: 'Mauricio Pertuz',
            hour: '14:10',
            starting: 'Villa Carolina',
            arrival: 'UN',
            vehicle: 'Chevrolet Sonic'
        },
        {
            id: '2',
            driver: 'Franco Guaragna',
            hour: '16:25',
            starting: 'UN',
            arrival: 'Calle 49 #52-22',
            vehicle: 'Mazda 3'
        },
    ];

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_NEW_TRAVEL:
            return [...state, ...action.payload]; // bring all new object
        default:
            return state;
    }
};
