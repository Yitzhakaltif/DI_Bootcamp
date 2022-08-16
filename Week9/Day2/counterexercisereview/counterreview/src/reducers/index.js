import { combineReducers } from 'redux'
import {INCREASE_COUNT, DECREASE_COUNT, EVEN_ODD} from '../actions/index'

const initialState = {
    count:0,
    evenodd: ''
}

export const counter_reducer = (state=initialState, action={})=>{
   switch (action.type){
    case INCREASE_COUNT:
        return {...state, count: state.count + 1}
    case DECREASE_COUNT:
        return {...state, count: state.count - 1}

    default:
        return {...state}
   }
}


//1. create a new reducer  that returns if the count is even or odd

export const evenodd_reducer = (state =initialState, action={}) => {
   switch(action.type){
    case EVEN_ODD:
        return{...state, evenodd: state.payload % 2 === 0 ? 'Odd' : 'Even'}
    
    default:
        return{...state, evenodd: state.count % 2 === 0 ? 'Even' : 'Odd'}

   
    }
}


export const reducer = combineReducers({
    counter_reducer,
    evenodd_reducer
})