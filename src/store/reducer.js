// import { act } from "react-dom/test-utils"
// import * as actionTypes from './actions';

// const intialState = {
//     counter: 100,
//     results:[]
// }

// const reducer = (state = intialState, action) => {
  
//     if(action.type===actionTypes.DELETE_RESULT){
//       //  console.log("delete",action.value)
//         const mResults=[...state.results];
//         mResults.splice(action.value,1);           
//         // console.log("memory array",mResults)
//         // console.log("state result after delete ",state.results);    
          
//         return{
//             ...state,
//             results:mResults
//         }

//        // Filter Method
//         // return{
//         //     ...state,
//         //     results:state.results.filter((result,index)=>index!==action.value)
//         // }
//     }

//     if(action.type===actionTypes.STORE_RESULT){
//         return{
//             ...state,
//             results:state.results.concat(state.counter)
//         }
//     }

//     if(action.type===actionTypes.INCREMENT){
//         //console.log("reducer");
//         return {
//             ...state,
//             counter:state.counter+1
//         }
//     }
//     if (action.type === actionTypes.DECREMENT) {
//         return {
//             ...state,
//             counter: state.counter - 1
//         }
//     }
//     if (action.type === actionTypes.ADDITION) {
//         return {
//             ...state,
//             counter: state.counter + action.value
//         }
//     }
//     if (action.type ===actionTypes.SUBTRACTION) {
//         return {
//             ...state,
//             counter: state.counter - action.value
//         }
//     }
//     if (action.type === 'MULTIPLY') {
//         return {
//             ...state,
//             counter: state.counter * action.value
//         }
//     }
//     if (action.type === 'DIVISON') {
//         return {
//             ...state,
//             counter: state.counter / action.value
//         }
//     }

    
//     // switch (action.type) {
//     //     case "INCREMENT":
//     //         return {
//     //             ...state,
//     //             counter: state.counter + 1
//     //         }
//     //     case "DECREMENT":
//     //         return {
//     //             ...state,
//     //             counter: state.counter - 1
//     //         }
//     //     case "ADD":
//     //         return {
//     //             ...state,
//     //             counter: state.counter + action.value
//     //         }
//     //     case "SUB":
//     //         return {
//     //             ...state,
//     //             counter: state.counter - action.value
//     //         }
//     //     case "MULTIPLY":
//     //         return {
//     //             ...state,
//     //             counter: state.counter * action.value
//     //         }
//     //     case "DIVISON":
//     //         return {
//     //             ...state,
//     //             counter: state.counter / action.value
//     //         }
//     //     default:
//     //         console.log("invalid option")
//     //         break;
//     //     }

//     return state;

// }


// export default reducer;