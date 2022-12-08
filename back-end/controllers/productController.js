const Product = require('../models/Product')
const User = require('../models/User')
const uuid = require('uuid')

    const productController = {
        getProducts: async(req, res) => {
            try{
                const displayProducts = await Product.find({}).limit(10)
                res.json(displayProducts)
            }catch(err){
                return res.status(500).json({msg: err.message})
            }
        },
        createProducts: async(req, res) =>{
            try {
                const {item, price, description, images} = req.body;
                if (!item || !price || !description || !images) {
                    return res.status(400).json({msg: "Missing required fields"})
                }
                const product_id = uuid.v4()
                const newProduct = new Product({
                    item, price, description, images, product_id
                })
                await newProduct.save()
                res.json({msg: "Listed Product for Sale"})
            } catch (err) {
                return res.status(500).json({msg: err.message})
            }
        },
        viewCart: async(req, res) =>{
            try {
                const current_cookie = req.cookie;
                const user = await User.findOne({current_cookie})
                if(!user){
                    res.redirect("/login")
                }
                else{
                    const user_cart = await user["cart"]
                    return res.json(user_cart)
                }
            } catch (err) {
                return res.status(500).json({msg: err.message})
            }
        },
        
    }


module.exports = productController