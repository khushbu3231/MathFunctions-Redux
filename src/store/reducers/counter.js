import { act } from "react-dom/test-utils"
import * as actionTypes from '../actions/actions';

const intialState = {
    counter: 100   
}

const reducer = (state = intialState, action) => {
   
    if(action.type===actionTypes.INCREMENT){
        return {
            ...state,
            counter:state.counter+1
        }
    }
    if (action.type === actionTypes.DECREMENT) {
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    if (action.type === actionTypes.ADDITION) {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    if (action.type ===actionTypes.SUBTRACTION) {
        return {
            ...state,
            counter: state.counter - action.value
        }
    }
    if (action.type === 'MULTIPLY') {
        return {
            ...state,
            counter: state.counter * action.value
        }
    }
    if (action.type === 'DIVISON') {
        return {
            ...state,
            counter: state.counter / action.value
        }
    }
    return state;

}


export default reducer;