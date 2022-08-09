import React from 'react'
import './Products.css'
class Products extends React.Component{
    constructor(){
        super();
        this.state = {
            products:[]
        }
    }


    componentDidMount(){
        fetch('http://localhost:5000/api/products/all')
        .then(res=>res.json())
        .then(data=>{
            this.setState({products:data})
        })
        .catch(e=>{
            console.log(e);
        })
    }

    render(){
        return(
            <>
            <h1>Shop</h1>
            
            {
                this.state.products.map(item =>{
                    return(
                        <div className='product' key={item.id}>
                            <h2>{item.name}</h2>
                            <h4>{item.price}</h4>

                        </div>
                    )
                })
            }

            </>

        )
    }

}

export default Products