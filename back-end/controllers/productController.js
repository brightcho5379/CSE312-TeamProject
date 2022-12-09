const Product = require('../models/Product')
const User = require('../models/User')
const uuid = require('uuid')
const { findOne } = require('../models/User')

    const productController = {
        getProducts: async(req, res) => {
            try{
                const displayProducts = await Product.find({}).sort({createdAt: 'desc'}).limit(10)
                res.json(displayProducts)
            }catch(err){
                return res.status(500).json({msg: err.message})
            }
        },

        createProducts: async(req, res) =>{
            try {
                const {item, price, description, images} = req.body;
                const current_cookie = req.cookie;
                if (!item || !price || !description || !images) {
                    return res.status(400).json({msg: "Missing required fields"})
                }
                const user = await User.findOne({current_cookie})
                if(!user){
                    res.redirect("/login")
                }
                const product_id = uuid.v4()
                const username = user.username
                const newProduct = new Product({
                    item, username, price, description, images, product_id
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