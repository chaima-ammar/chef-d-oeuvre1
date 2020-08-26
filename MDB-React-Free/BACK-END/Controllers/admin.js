const User = require("../Models/admin")



module.exports={


    getAllUser: async (req ,res)=>{
        console.log(res.body)
         const user = await User.find()
         res.send(JSON.stringify(user)
          
         )

},



 deleteAllUser:  (req,res)=>{
     const users = User.findByIdAndDelete(req.params.id).then(()=>res.send("user deleted"))
         .catch(err=>
            console.log(err)
        
         )
  },




  postUser :  (req,res)=>{
     
    const user = new User(req.body);
user.save()
.then((user)=> res.json(user))
.catch(err=> console.log(err))
},









}












