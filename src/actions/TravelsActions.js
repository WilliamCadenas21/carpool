import {
    CREATE_NEW_TRAVEL,
    FETCH_TRAVEL
} from './types';

export const createTravel = (travel) => {
    return {
        type: CREATE_NEW_TRAVEL,
        payload: travel
    };
};

export const setTravels = (travel) => {
    return {
        type: FETCH_TRAVEL,
        payload: travel
    };
};