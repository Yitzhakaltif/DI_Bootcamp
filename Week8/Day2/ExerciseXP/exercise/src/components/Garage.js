import React from 'react'


class Garage extends React.Component{
    constructor(props){
        super(props);
       
    }

    render(){
        return(
            <>
        <header>
            Who lives in my {this.props.size} Garage?
        </header>
        </>
        )
        
    }
}


export default Garage