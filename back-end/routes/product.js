const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')
const {upload} = require('../middleware/image')

router.get('/products', productController.getProducts)
router.post('/post', upload.single("images") ,productController.createProducts)
router.get('/cart',productController.viewCart)


module.exports = router