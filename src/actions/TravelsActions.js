import {
    CREATE_NEW_TRAVEL,
} from './types';

export const createTravel = (travel) => {
    return {
        type: CREATE_NEW_TRAVEL,
        payload: travel
    };
};
