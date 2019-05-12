const mongoose= require('mongoose')
const Schema= mongoose.Schema

const programSchema= new Schema({
    name: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    sets: {type: String, required: true},
    repetition: {type: String, required: true},
    img: {type: String, required: true},
    reward: {type: String}
})

const Program= mongoose.model('Program', programSchema)
module.exports= Program