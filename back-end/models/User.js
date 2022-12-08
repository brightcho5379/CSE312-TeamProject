const mongoose= require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    university:{
        type:String,
        required:true
    },
    cookie:{
        type:String,
        require:true
    },
    cart:{
        type: [mongoose.Schema.Types.ObjectId],
        default: []     
    },
    prevPostings: { 
        type: Array,
        default: []
    },
    prevPurchases:{
        type: Array,
        default: []
    }
    },{
    timestamps: true
})

module.exports = mongoose.model('User',userSchema)