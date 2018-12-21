import {
    USER_UPDATE_MODE,
} from './types';

export const modeUpdate = (mode) => {
    return {
        type: USER_UPDATE_MODE,
        payload: mode
    };
};
