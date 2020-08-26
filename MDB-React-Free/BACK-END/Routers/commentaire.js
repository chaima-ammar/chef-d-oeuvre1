const express = require('express')
const comentControllers=require('../Controllers/commentaire')

const router=express.Router()


router.patch('/user/postCommentaire/:id', comentControllers.postCommentaire)




module.exports=router;