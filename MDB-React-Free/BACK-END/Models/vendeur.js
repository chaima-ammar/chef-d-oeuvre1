let mongoose = require('mongoose')
let comm = require ('../Models/commentaire')
const Schema = mongoose.Schema

const Product = new Schema({
    title:String ,
    image: String,
    price:String,
    telephone:String,
    email:String,
   categorie:String,
   nomboutique:String,
   reservation:String,
   vendeurId:String,
   commentaire:[comm]

   
})


module.exports = mongoose.model('Products',Product)
