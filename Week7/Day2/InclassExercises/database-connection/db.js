const knex = require('knex');

const db = knex({
  client:'pg',
  connection: {
    host: '127.0.0.1',
    port: '5432',
    user: 'postgres',
    password: 'YitzhakDI',
    database:'dvdrental'
  }
});

const getAllProducts = () => {
  return db('products')
  .select('id','name','price')
  .orderBy('name')
}

const getProduct = (product_id) => {
  return db('products')
  .select('id','name','price')
  .where({id:product_id})
}

const searchProduct = (product_name) => {
  return db('products')
  .select('id','name','price')
  .whereILike('name', `${product_name}%`)
}

const insertProduct = (product) => {
  return db('products')
  .insert(product)
  .returning('*')
}


const updateProduct = (product_id, product)=>{
    return db(`products`)
    .update(product)
    .where({id:product_id})
    .returning(`*`)
}

module.exports = {
  getAllProducts,
  getProduct,
  searchProduct,
  insertProduct,
  updateProduct
}





//above is from ziv




// // db(`country`)
// // .del()
// // // .insert([
// // //     {country:`DI Learning IL`},
// // //     {country: `Shaulan`}
// // // ])
// // // .select(`country_id`, `country`)
// // // .orderBy(`country_id`, `desc`)
// // // .update({country:`Angola`})
// // .where({country_id:110})
// // .returning(`*`)
// // .then(data=>{
// //     console.log(data);
// // }).catch(e=>{
// // console.log(e);
// // })


// db(`products`)
// .insert([
//     {name:`lenovo`,price: 2600},
//     {name: `macbook`, price:4000 }
// ])
// // .select(`country_id`, `country`)
// // .orderBy(`country_id`, `desc`)
// // .update({country:`Angola`})
// // .where({country_id:110})
// .returning(`*`)
// .then(data=>{
//     console.log(data);
// }).catch(e=>{
// console.log(e);
// })