const ProductAcceuil = require("../Models/vendeur")



module.exports={


    getProductAcceuil: async (req ,res)=>{
       // console.log("aceuil",res.body)
         const Products = await ProductAcceuil.find()
         res.send(JSON.stringify(Products))
          
      },

      deleteProduct:  (req,res)=>{
         const users = ProductAcceuil.findByIdAndDelete(req.params.id).then(()=>res.send("article deleted"))
             .catch(err=>
                console.log(err)
            
             )
      }
       


    }











