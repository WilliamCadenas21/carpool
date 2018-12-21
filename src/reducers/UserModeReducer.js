import {
    USER_UPDATE_MODE
    ,
} from '../actions/types';

const INITIAL_STATE = {
    rider: true,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_UPDATE_MODE:
            console.log(action.payload);
            return { ...state, rider: action.payload }; // bring all new object
        default:
            return state;
    }
};
