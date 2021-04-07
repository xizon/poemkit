import {combineReducers} from 'redux';
import demoListReducer from './demoListReducer.js';
import demoListDetailReducer from './demoListDetailReducer.js';

export default combineReducers({
    listData: demoListReducer,
    listDetailData: demoListDetailReducer
});