import {
    USER_UPDATE_MODE_RIDER,
    USER_UPDATE_MODE_DRIVER
} from '../actions/types';

const INITIAL_STATE = {
    rider: true,
    color: '#237EE7',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_UPDATE_MODE_RIDER:
            return { ...state, rider: action.payload, color: '#237EE7' }; // bring all new object
        case USER_UPDATE_MODE_DRIVER:
            return { ...state, rider: action.payload, color: '#ECA228' };
        default:
            return state;
    }
};
