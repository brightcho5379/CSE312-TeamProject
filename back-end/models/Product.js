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
        type: Object,
        required: true
    },
}, {
    timestamps: true //important
})


module.exports = mongoose.model("Products", productSchema)