//initialize state
const initialState = {
    items: null,
};

export default (state = initialState, action) => {
    switch (action.type) {

        case 'RECEIVE_DEMO_LIST': {
          return { ...state, items: action.payload };
        }   
            
        default:
            return state;
    }
};