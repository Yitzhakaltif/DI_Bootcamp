import React from 'react'
import Garage from './Garage';


class Car extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color: 'Blue'
        }
    }

    render(){
        return(
            <>
        <header>
            This car is a {this.state.color} {this.props.model}
            
        </header>
        </>
        )
        
    }
}


export default Car