require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose')

const PORT = process.env.PORT

// Connect Mongoose
mongoose.connect('mongodb://localhost/project4db',{
    useNewUrlParser: true
})
.then(()=>{
    console.log('MongoDB Connected');
})
.catch((err)=> console.log(err))

// Body parser middleware
app.use(express.urlencoded({ extended: false}))
app.use(express.json())


// 
app.get('/',(req,res)=>{
    res.send('Hello Azoooooooooz')
});



app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
})