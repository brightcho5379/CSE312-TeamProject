const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')

router.get('/', productController.getProducts)
router.post('/post', productController.createProducts)
router.get('/cart',productController.viewCart)



module.exports = router