import {combineReducers} from 'redux';
import {LoginReducer} from './login';
import {HomeReducer} from './home';
export default combineReducers({
    LoginReducer,
    HomeReducer
})