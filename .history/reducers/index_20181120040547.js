import {combineReducers} from 'redux';
import {LoginReducer} from './login';
import {HomeReducer} from './'
export default combineReducers({
    LoginReducer,
    HomeReducer
})