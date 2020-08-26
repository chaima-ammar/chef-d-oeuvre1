
const Product = require("../Models/vendeur")


module.exports={


    getProductbyid: (req ,res)=>{
        Product.findById({_id:req.params.id })
        .then(product=>
          res.send(product))
          .catch(err=>
              res.status(500).send("error server"))
    },


    getProduct: async (req ,res)=>{
      console.log(res.body)
       const product = await  Product.find()
       res.send(product)
        
    },
  

    postProduct :  (req,res)=>{
     
        const newProduct = new Product(req.body);
        newProduct.save()
                      .then(()=> res.json(newProduct))
                      .catch(err=> console.log(err))
    },
    


    deleteProduct:  (req,res)=>{
       const prod = Product.findByIdAndDelete(req.params.id).then(()=>res.send(prod))
           .catch(err=>
               console.log(err)
           
           )
    },
   
    patchProduct: async (req,res)=>{
        try {
          
            product = await Product.findByIdAndUpdate(req.params.id, req.body, {
              new: true
            });
            res.send(product);
          } catch (error) {
            console.error(error.message);
            res.status(500).send('Server error');
          }
    }



















    
}