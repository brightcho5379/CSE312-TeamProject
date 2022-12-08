const Product = require('../models/Product')
const User = require('../models/User')

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
                if(!images) return res.status(400).json({msg: "No image upload"})
                const product = await Products.findOne({product_id})
                if(product)
                    return res.status(400).json({msg: "This product already exists."})
                const newProduct = new Products({
                    item: title.toLowerCase(), price, description, content, images, category
                })
                await newProduct.save()
                res.json({msg: "Created a product"})
            } catch (err) {
                return res.status(500).json({msg: err.message})
            }
        },
        
    }


module.exports = productController