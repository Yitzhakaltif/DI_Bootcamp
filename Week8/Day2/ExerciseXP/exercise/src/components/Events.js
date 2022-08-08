import React from 'react'

class Events extends React.Component{
    constructor(){
        super()
        this.state={
            isToggleOn: true
        };
       
    }


    handleKeyPress = (e) => {
        if (e.key === "Enter") {
          alert(`The Enter Key was pressed, your input is: ${e.target.value}`);
        }
      };

    clickMe = () => {
        alert("I was clicked!");
      };


      btn = () => {
        this.setState({ isToggleOn: false });
      };
      
render(){
    let clicked = "ON";
    if (this.state.isToggleOn === false) {
      clicked = "OFF";
    }
return(
    <>
        <button onClick={this.clickMe}>button</button>
        
        <input type="text" onKeyPress={this.handleKeyPress} />

        <button onClick={this.btn}>{clicked}</button>
    </>

)
  

}

}


export default Events