const UserComent= require("../Models/vendeur")



module.exports={


    postCommentaire :  (req,res)=>{
       console.log(req.body)
  UserComent.findByIdAndUpdate(req.params.id,{$push:{commentaire : req.body}} )
    .then((comment)=> res.json(comment))
    .catch(err=> console.log(err))
    },
    






}





