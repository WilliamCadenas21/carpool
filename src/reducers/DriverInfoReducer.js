import {
    DRIVER_UPDATE_INFO,
} from '../actions/types';

const INITIAL_STATE = {
    plate: '',
    model: '',
    color: '',
    brand: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DRIVER_UPDATE_INFO:
            return { ...state, ...action.payload }; // bring all new object
        default:
            return state;
    }
};
