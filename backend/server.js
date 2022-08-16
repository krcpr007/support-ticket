const express = require('express');
const colors = require('colors')
const connectDB = require('./config/db');
const dotenv = require('dotenv').config();
const app = express();
const PORT = 5000;

// connecting to db 
connectDB()

app.use(express.json());
app.use(express.urlencoded({ extended: false }))


app.get('/', (req, res) => {
    res.send("Hello")
})

// Routes
app.use('/api/users', require('./routes/userRoutes'))

app.listen(PORT, () => {
    console.log(`Server started at Port : ${PORT}`);
})