import {
    POLLINGRESULTS_CREATE_REQUEST,
    POLLINGRESULTS_CREATE_FAIL,
    POLLINGRESULTS_CREATE_SUCCESS, 

    POLLINGRESULTS_LIST_REQUEST,
    POLLINGRESULTS_LIST_SUCCESS,
    POLLINGRESULTS_LIST_FAIL,
  } from '../constants/pollingResultConstants'
  
  export const pollingResultsCreateReducer = (state = {}, action)=>{
    switch(action.type){
       case POLLINGRESULTS_CREATE_REQUEST:
         return{
           loading:true
         }
       case POLLINGRESULTS_CREATE_SUCCESS:
         return{
           loading:false,
           success:true,
           //order:action.payload
         }
       case POLLINGRESULTS_CREATE_FAIL:
         return{
           loading:false,
           error:action.payload,
         }  
        default:
        return state
    }
  }
  

  
  export const pollingResultsListReducer = ( state={results:[]}, action) => {
    switch (action.type) {
      case POLLINGRESULTS_LIST_REQUEST:
        return {
          loading: true,
        }
      case POLLINGRESULTS_LIST_SUCCESS:
        return {
          loading: false,
          results: action.payload,
        }
      case POLLINGRESULTS_LIST_FAIL:
        return {
          loading: false,
          error: action.payload,
        }
      // case PICKUP_LIST_RESET:
      //   return { pickups: [] }
      default:
        return state
    }
  }
  