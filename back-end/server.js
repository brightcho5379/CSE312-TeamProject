require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express();

//Routes
app.use('/user',require('./routes/login.js'))
app.use('/',require('./routes/product.js'))

const URI = process.env.DATABASE_URI
mongoose.connect(URI, () =>
    console.log('Connected to MongoDB')
)

const PORT = process.env.PORT || 3000
app.listen(PORT, () =>{
    console.log('Server is running on port', PORT)
})


