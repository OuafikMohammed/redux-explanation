// Reducers : Functions that determine how the state changes in response to actions
const initialState = { count:0 };

export default function counterReducer(state = initialState , action){
    switch (action.type){
        case 'INCREMENT' :
            return {...state , count: state.count + 1};
        case 'DECREMENT' :
            return {...state , count: state.count - 1};
        default :
            return state;
    }
}