require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose')

const PORT = process.env.PORT
const DB = process.env.DB

// Connect Mongoose
mongoose.connect(DB,{
    useNewUrlParser: true
})
.then(()=>{
    console.log('MongoDB Connected');
})
.catch((err)=> console.log(err))

// Body parser middleware
app.use(express.urlencoded({ extended: false}))
app.use(express.json())

// Define routes
const users = require('./routes/api/users');
const challenges = require('./routes/api/challenges');
const tasks = require('./routes/api/tasks');
const badges = require('./routes/api/badges');

// Use routes
app.use('/api/users',users)
app.use('/api/challenges',challenges)
app.use('/api/tasks',tasks)
app.use('/api/badges',badges)

//
app.get('/',(req,res)=>{
    res.send('Hello Azoooooooooz')
});

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
})