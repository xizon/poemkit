import axios from 'axios';

//get project config
import { API } from '@uixkit.react/config';

export const fetchDemoList = () => {
    
    return async (dispatch) => {

        const res = await axios.get( API.RECEIVE_DEMO_LIST );
		
		//The Redux store has a method called dispatch.
		//@https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow
        dispatch({ type: 'RECEIVE_DEMO_LIST', payload: res.data });
        
    }
}
