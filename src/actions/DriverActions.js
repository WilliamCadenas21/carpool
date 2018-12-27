import {
    DRIVER_UPDATE_INFO,
} from './types';

export const driverUpdate = (car) => {
    return {
        type: DRIVER_UPDATE_INFO,
        payload: car
    };
};
