import React from 'react';

class ErrorBoundary extends React.Component{
    constructor(){
        super();
        this.state = {
            error:null,
            errorInfo:null
        }
    }
    componentDidCatch(error, errorInfo){
        console.log(error, errorInfo);
        this.setState({error:error,errorInfo:errorInfo})
    }
    render(){
        if(this.state.error){
            return (
                <div>
                    Something went wrong please try again later
                </div>
            )
        }
        return this.props.children
    }
}


export default ErrorBoundary