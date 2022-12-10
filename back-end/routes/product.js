const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')
const {upload} = require('../middleware/image')

router.get('/products', productController.getProducts)
router.post('/post', upload.single("images") ,productController.createProducts)
router.post('/cart', productController.addToCart)
router.get('/viewcart',productController.viewCart)



module.exports = router