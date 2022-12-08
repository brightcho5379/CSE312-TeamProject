const Users = require('../models/User')
const bcrypt = require('bcrypt')
const crypto = require("crypto");

    const loginController = {
        //Register Request
        register: async (req, res) =>{
            try {
                const {username, password, email, university} = req.body;
    
                const user_email = await Users.findOne({email})
                if(user_email) return res.status(400).json({msg: "The email already exists."})
                const user_username = await Users.findOne({username})
                if(user_email) return res.status(400).json({msg: "This username already exists."})
                if(password.length < 6) 
                    return res.status(400).json({msg: "Password is at least 6 characters long."})
                
                const passwordHash = await bcrypt.hash(password, 10)
                const cookie_value = crypto.randomBytes(20).toString('hex');
                const cookie = res.cookie('auth',cookie_value,{maxAge:"7*24*60*60*1000",httpOnly: true})
                const newUser = new Users({
                    username, email, password: passwordHash, university, cookie
                })
                await newUser.save()
                res.redirect('/categories')
                
            } catch (err) {
                return res.status(500).json({msg: err.message})
            }
        },

        //Login Request 
        login: async (req, res) =>{
            try {
                const {username, password} = req.body;
                const user = await Users.findOne({username})
                if(!user) return res.status(400).json({msg: "Username does not exist."})
                const isMatch = await bcrypt.compare(password, user.password)
                if(!isMatch) return res.status(400).json({msg: "Incorrect password."})
                
                const filter = { name: user['username'] };
                const update = { cookie: "" };
                await User.findOneAndUpdate(filter, update, function(err, doc) {
                    if (err) return res.send(500, {error: err});
                    return res.send('Succesfully saved.');
                });
                await user.save()
                res.redirect('/categories')
                
            } catch (err) {
                return res.status(500).json({msg: err.message})
            }
        },
        
        logout: async (req, res) => {
            try {
                const current_cookie = req.cookie;
                const user = await User.findOne({current_cookie})
                const filter = { name: user['username'] };
                const update = { cookie: "" };
                User.findOneAndUpdate(filter, update, function(err, doc) {
                    if (err) return res.send(500, {error: err});
                    return res.send('Succesfully saved.');
                });
                res.redirect('/categories')
                res.clearCookie('refreshtoken', {path: '/user/refresh_token'})
                return res.json({msg: "Logged out"})
            } catch (err) {
                return res.status(500).json({msg: err.message})
            }
        }
    }


module.exports = loginController