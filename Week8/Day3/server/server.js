const express = require(`express`);
const {getAllProducts} = require('./modules/products.js')
const dotenv = require('dotenv')
const cors = require('cors')
const products_router = require('./routes/products.js')

dotenv.config();

const app = express();

app.listen(process.env.PORT, ()=>{
    console.log(`server is running on port ${process.env.PORT}`);
})

app.use(cors())
app.use('/api/products', products_router);