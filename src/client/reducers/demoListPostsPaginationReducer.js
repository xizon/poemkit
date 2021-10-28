//initialize state
const initialState = {
    getData: null,
};

export default (state = initialState, action) => {
    switch (action.type) {

        case 'RECEIVE_PAGE_LIST': {
          return { ...state, getData: action.payload };
        }   
            
        default:
            return state;
    }
};