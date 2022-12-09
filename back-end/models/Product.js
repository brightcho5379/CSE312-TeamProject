const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    item:{
        type: String,
        required: true
    },
    username:{
        type:String,
    },
    price:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    images:{
        type: Buffer,
        required: true
    },
    product_id:{
        type: String,
        unique: true,
        required: true
    }}, 
    {
    timestamps: true 
})


module.exports = mongoose.model("Products", productSchema)