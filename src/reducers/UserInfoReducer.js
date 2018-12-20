import {
    USER_UPDATE,
} from '../actions/types';

const INITIAL_STATE = {
    names: '',
    lastNames: '',
    address: '',
    neighborhood: '',
    email: '',
    degree: '',
    semester: '',
    age: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_UPDATE:
            return { ...state, ...action.payload }; // bring all new object
        default:
            return state;
    }
};
