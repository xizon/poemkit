import axios from 'axios';

export const fetchDemoList = () => {
    
    return async (dispatch) => {

        const res = await axios.get( `https://restcountries.eu/rest/v2` );
		//const res = await axios.get( `../../assets/json/Posts.json` );
		
		//The Redux store has a method called dispatch.
		//@https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow
        dispatch({ type: 'RECEIVE_DEMO_LIST', payload: res.data });
        
    }
}
