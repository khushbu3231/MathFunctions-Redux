import { act } from "react-dom/test-utils"
import * as actionTypes from '../actions/actions';

const intialState = {
    results:[]
}

const reducer = (state = intialState, action) => {
  
    if(action.type===actionTypes.DELETE_RESULT){
        const mResults=[...state.results];
        mResults.splice(action.value,1);           
        return{
            ...state,
            results:mResults
        }

       // Filter Method
        // return{
        //     ...state,
        //     results:state.results.filter((result,index)=>index!==action.value)
        // }
    }

    if(action.type===actionTypes.STORE_RESULT){
        return{
            ...state,
            results:state.results.concat(action.result)
        }
    }   
    return state;
}
export default reducer;