const User = require('../models/User')
const Product = require('../models/Product')
const uuid = require('uuid')

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
                // console.log(req)
                const {item, price, description} = req.body;
                const cookie_dict = req.cookies;
                console.log(cookie_dict)
                const final = req.file.path
                console.log(final)
                const end = final.split('/')
                const folder = end[2]
                const src = end[3]
                const images = './../../' + folder + '/' + src
                console.log(src)
                if (!images) {
                    return res.status(400).json({msg: "Missing image field"})
                }
                if (!description) {
                    return res.status(400).json({msg: "Missing description field"})
                }
                if (!price) {
                    return res.status(400).json({msg: "Missing price field"})
                }
                if (!item) {
                    return res.status(400).json({msg: "Missing item field"})
                }
                const current_cookie = cookie_dict.auth
                const user = await User.findOne({"cookie":current_cookie})
                if(!user || current_cookie == ""){
                    res.redirect("/Login")
                }
                const product_id = uuid.v4()
                // console.log(current_cookie) 
                const current_username = user['username']
                const newProduct = new Product({
                    item, username:current_username, price, description, images, product_id
                })
                await newProduct.save()
                res.json({msg: "Listed Product for Sale"})
                console.log("an item was posted")
            } catch (err) {
                return res.status(500).json({msg: err.message})
            }
        },

        viewCart: async(req, res) =>{
            try {
                const cookie_dict = req.cookies;
                const current_cookie = cookie_dict.auth
                const user = await User.findOne({cookie:current_cookie})
                const array = []
                for (let i = 0; i < user.cart.length; i ++){
                    const x = await Product.findOne({_id:user.cart[i]})
                    array.push(x)
                }
                if(!user|| user == ""){
                    res.redirect("localhost:3000/Login")
                }
                else{
                   // console.log(array)
                    return res.json(array)
                }
            } catch (err) {
                return res.status(500).json({msg: err.message})
            }
        },
        addToCart: async(req, res) =>{
            try {
                const product = req.body;
                const cookie_dict = req.cookies;
                const current_cookie = cookie_dict.auth
                const user = await User.findOne({cookie:current_cookie})
                user.cart.push(product.product)
                await user.save();
                if(!user || user == ""){
                    res.redirect("localhost:3000/Login")
                }
                else{
                    return res.json(user.cart)
                }
            } catch (err) {
                return res.status(500).json({msg: err.message})
            }
        },
        
    }


module.exports = productController