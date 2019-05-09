const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema= new Schema({
    category: {type: String, required: true},
    name: {type: String, required: true},
    reward: {type: String, required: true}
})

const Task= mongoose.model('Task', taskSchema)
module.exports= Task