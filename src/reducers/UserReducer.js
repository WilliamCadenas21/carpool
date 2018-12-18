import {
    USER_UPDATE,
} from '../actions/types';

const INITIAL_STATE = {
    names: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        default:
            return state;
    }
};
