import {
    USER_UPDATE_INFO,
} from './types';

export const userUpdate = (user) => {
    return {
        type: USER_UPDATE_INFO,
        payload: user
    };
};
