import React from "react";

class Vote extends React.Component {
    constructor(){
        super();
        this.state = {
            votes : 0
        }
    }
    addVote = () => {
        this.setState({votes: this.state.votes + 1})
      }; 
    render(){
        
        return(
            <div class="candidate">
                <div>{this.state.votes}</div>
                <div>{this.props.name}</div>
                <button onClick={this.addVote}>vote here</button>
            </div>
        )
    }
}
export default Vote