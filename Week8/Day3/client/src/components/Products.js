import React from 'react'
import './Products.css'
class Products extends React.Component{
    constructor(){
        super();
        this.state = {
            products:[],
            searchText: '',
            name:'',
            price:''
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

    handleChange = (e)=>{
        this.setState({searchText:e.target.value})
    }

    handleClick = ()=>{
        console.log(this.state.searchText);
        fetch(`http://localhost:5000/api/products/search?q=${this.state.searchText}`)
        .then(res=>res.json())
        .then(data=>{
            this.setState({products:data})
        })
        .catch(e=>{
            console.log(e);
        })
    
    }

    handleInput = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    
    addProduct = ()=>{
        const {name, price}= this.state;
        fetch('http://localhost:5000/api/products/add',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({name, price})
        })
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
            <div>
                <input type="text" placeholder='Search...' onChange={this.handleChange} name="searchText"/>
                <button onClick={this.handleClick}>Search</button>
            </div>
            <div>
                Name: <input type="text" onChange={this.handleInput} name="name"/>
                Price: <input type="text" onChange={this.handleInput} name="price"/>
                <button onClick={this.addProduct}>Add Product</button>
            </div>
            
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