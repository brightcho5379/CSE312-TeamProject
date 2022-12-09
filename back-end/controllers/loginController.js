const Users = require('../models/User')
const Product = require('../models/Product')
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
                if(user_username) return res.status(400).json({msg: "This username already exists."})
                if(password.length < 6) return res.status(400).json({msg: "Password is at least 6 characters long."})
                const passwordHash = await bcrypt.hash(password, 10)
                const cookie_value = crypto.randomBytes(20).toString('hex');
                const expirationDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
                res.cookie('auth', cookie_value, {expires: expirationDate});
                
                const newUser = new Users({
                    username, email, password: passwordHash, university, cookie:cookie_value
                })
                await newUser.save()
                res.json({msg : "Account Successfully Created"})
                
            } catch (err) {
                return res.status(500).json({msg: err.message})
            }
        },

        //Login Request 
        //Login Request 
        login: async (req, res) => {
            try {
                const { username, password } = req.body;
                const user = await Users.findOne({ username });
                if (!user) {
                    return res.status(400).json({msg: "User does not exist."});
                }
                const isMatch = await bcrypt.compare(password, user.password);
                if (!isMatch) return res.status(400).json({ msg: "Incorrect password." });
                const cookie_value = crypto.randomBytes(20).toString("hex");
                const expirationDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
                const filter = { username: username };
                const update = { cookie: cookie_value };
                const updatedUser = await Users.findOneAndUpdate(filter, update);
                await updatedUser.save();
                res.cookie('auth', cookie_value, {httpOnly: true, expires: expirationDate,domain:"localhost:3000",path:"/"})
                res.redirect('/')    
                } catch (err) {
                return res.status(500).json({msg: err.message});
            }
        },
            
        
        logout: async (req, res) => {
            try {
                const current_cookie = req.cookie;
                if(!current_cookie){
                    res.redirect('/login')
                    return res.json({msg:"You are not Logged In"})
                }
                const user = await Users.findOne({current_cookie})
                const filter = { "username" : user.username };
                const update = { "cookie" : "" };
                Users.findOneAndUpdate(filter, update, function(err, doc) {
                    if (err) return res.send(500, {error: err});
                });
                return res.clearCookie('auth', {httpOnly: true}).redirect('/').json({msg: "Logged out"})

            } catch (err) {
                return res.status(500).json({msg: err.message})
            }
        }
    }


module.exports = loginController