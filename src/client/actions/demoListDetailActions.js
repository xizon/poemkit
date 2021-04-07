import axios from 'axios';

export const fetchDemoListDetail = ( id ) => {
    
    return async (dispatch) => {
        
        const res = await axios.get( `https://restcountries.eu/rest/v2/name/${id}` );
		//const res = await axios.get( `../../assets/json/PostDetail.json` );
		
		//The Redux store has a method called dispatch.
		//@https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow
        dispatch({ type: 'RECEIVE_DEMO_LISTDETAIL', payload: res.data });   

    }
}
