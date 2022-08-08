import React from 'react'
class Counter extends React.Component {
    constructor(){
        super();
        this.state={
            counter: 0
            
        }
        console.log('constructor')

    }

    add=()=>{
        this.setState({counter:this.state.counter+1})
    }


    minus=()=>{
        this.setState({counter:this.state.counter-1})
    }
    render(){
        console.log('render')
        return(
            <>
                <div>
                    <button onClick={this.minus}>-</button>
                      {this.state.counter}
                    <button onClick={this.add}>+</button>
                </div>
             
            </>
               
            )
    }
}











export default Counter