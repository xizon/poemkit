import axios from 'axios';

//get project config
import { API } from '@uixkit.react/config';

const actionCreators = (id) => {
    
	// The function defined by async will return the value of a `Promise()` object resolve by default, 
	// so the `then()` can be used directly, and the returned value is the params of the `then()`
    return async (storeDispatch) => {

        const res = await axios.get( API.RECEIVE_DEMO_LISTDETAIL.replace( '{id}', id ) );
		
		//The Redux store has a method called `store.dispatch()`.
		const action = {
			type: 'RECEIVE_DEMO_LISTDETAIL',
			payload: res.data
		}

        storeDispatch(action);
        
    }
}

export default actionCreators;