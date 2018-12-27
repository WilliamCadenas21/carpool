import { combineReducers } from 'redux';
import UserInfoReducer from './UserInfoReducer';
import UserModeReducer from './UserModeReducer';
import TravelReducer from './TravelsReducer.js';
import DriverInfoReducer from './DriverInfoReducer.js';


export default combineReducers({
    userInfo: UserInfoReducer,
    userMode: UserModeReducer,
    travel: TravelReducer,
    driverInfo: DriverInfoReducer
});

