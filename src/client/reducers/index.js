import {combineReducers} from 'redux';
import demoListReducer from '@/reducers/demoListReducer.js';
import demoListDetailReducer from '@/reducers/demoListDetailReducer.js';
import demoListPostsPaginationReducer from '@/reducers/demoListPostsPaginationReducer.js';

export default combineReducers({
    listData: demoListReducer,
    listDetailData: demoListDetailReducer,
    listPostsPaginationData: demoListPostsPaginationReducer
});

//@link to: `src/client/client.js`, src/store/createStore.js`