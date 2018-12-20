import {
    USER_UPDATE,
} from './types';

export const userUpdate = (user) => {
    return {
        type: USER_UPDATE,
        payload: user
    };
};
