let mongoose = require('mongoose')
const Schema = mongoose.Schema

const user = new Schema({
    nom: String,
    prenom:String,
    role: String,
   
})


module.exports = mongoose.model('users',user)