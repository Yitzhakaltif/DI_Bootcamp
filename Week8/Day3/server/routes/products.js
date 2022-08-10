const express = require('express');
const router = express.Router();

const { _getAllProducts, _getOneProduct, _searchProduct, _insertProduct}= require('../controllers/products.js');
router.get('/all/:id', _getOneProduct)
router.get('/all', _getAllProducts);
router.get('/search', _searchProduct);
router.post('/add', _insertProduct);
  


module.exports = router
