import {combineReducers} from 'redux';
import demoListReducer from '@uixkit.react/reducers/demoListReducer.js';
import demoListDetailReducer from '@uixkit.react/reducers/demoListDetailReducer.js';
import demoListPostsPaginationReducer from '@uixkit.react/reducers/demoListPostsPaginationReducer.js';

export default combineReducers({
    listData: demoListReducer,
    listDetailData: demoListDetailReducer,
    listPostsPaginationData: demoListPostsPaginationReducer
});

//@link to: `src/client/client.js`, src/store/createStore.js`