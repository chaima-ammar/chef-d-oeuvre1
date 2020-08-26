let mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentaire = new Schema({
    text: String,
    date: String,
    user: String,
    role: String
   
})



module.exports =commentaire