export const handleChangeAction = (value)=>{
    return{
        type:'CHANGE_PROP_ONE',
        payload:value
    }
}

export const handleClickAction = (value)=>{
    return{
        type:'CHANGE_PROP_TWO',
        payload:value
    }
}


export const changeOne = (value)=>{
    return{
        type:'ONE',
        payload:value
    }
}