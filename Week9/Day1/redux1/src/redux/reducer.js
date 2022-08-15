
const initState = {
    prop_one: 'One 1 from store',
    prop_two: 'Two 2 from store',
    one_one: '12345'
}

export const reducer = (state=initState, action={})=>{
    switch(action.type){
        case 'CHANGE_PROP_ONE':
            return{...state, prop_one:action.payload}
        case 'CHANGE_PROP_TWO':
            return{...state, prop_two:state.prop_one}
        case 'ONE': 
            return{...state, one_one:action.payload}
        default:
            return{...state}

    }

}

