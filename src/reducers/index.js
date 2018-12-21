import { combineReducers } from 'redux';
import UserInfoReducer from './UserInfoReducer';
import UserModeReducer from './UserModeReducer';

export default combineReducers({
    userInfo: UserInfoReducer,
    userMode: UserModeReducer
});

