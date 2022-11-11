const Users = require('../models/Users.js')

const loginController ={
    register: async(req, res) =>{
        try{
            const {username, password, email, university} = res.body;
            const currentUser = await User.findOne({username})
            const currentEmail = await User.findOne({email})

            if (currentUser) return res.status(400).json({msg: "This username already exist"})
            if (password.length < 6) return res.status(400).json({msg: "Password must be greater than 6 characters"})
            if (currentEmail) return res.status(400).json({msg: "This email already exist"})

            res.json({msg:"Register Successful"})
            
        }catch(err){
            return res.status(500).json({msg:err.message})
        }

    }
}


module.exports = loginController