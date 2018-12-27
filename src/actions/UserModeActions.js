import {
    USER_UPDATE_MODE_RIDER,
    USER_UPDATE_MODE_DRIVER
} from './types';

export const riderMode = () => {
    return {
        type: USER_UPDATE_MODE_RIDER,
        payload: true
    };
};

export const driverMode = () => {
    return {
        type: USER_UPDATE_MODE_DRIVER,
        payload: false
    };
};
