const {db} = require('../connections/herokupg.js');

const getAllProducts = ()=>{
    return db('products')
    .select('id', 'name', 'price')
    .orderBy('name')
}

const getOneProduct = (product_id)=>{
    return db('products')
    .select('id', 'name', 'price')
    .where({id:product_id})
}



const searchProduct = (name)=>{
    return db('products')
    .select('id', 'name', 'price')
    .whereILike('name',`${name}%`)
}
//{name:'iphone', price: 1000}
const insertProduct = (product)=>{
    return db('products')
    .insert(product)
    .returning('*')
}

module.exports = {
    getAllProducts,
    getOneProduct,
    searchProduct,
    insertProduct
}