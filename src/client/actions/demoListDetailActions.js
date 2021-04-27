import axios from 'axios';

//get project config
import { API } from '@uixkit.react/config';

export const fetchDemoListDetail = ( id ) => {
    
    return async (dispatch) => {
        
        const res = await axios.get( API.RECEIVE_DEMO_LISTDETAIL.replace( '{id}', id ) );
		
		//The Redux store has a method called dispatch.
		//@https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow
        dispatch({ type: 'RECEIVE_DEMO_LISTDETAIL', payload: res.data });   

    }
}
