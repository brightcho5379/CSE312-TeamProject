require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const app = express();

app.use(express.json())
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true
  }));
app.use(fileUpload({
    useTempFiles: true
}))


//Routes
app.use('/user',require('./routes/login.js'))
app.use('/api',require('./routes/product.js'))
// app.use('/auction',require('./routes/auction.js'))

const URI = process.env.DATABASE_URI
mongoose.connect(URI, () =>
    console.log('Connected to MongoDB')
)

const PORT = process.env.PORT || 8080
app.listen(PORT, () =>{
    console.log('Server is running on port', PORT)
})