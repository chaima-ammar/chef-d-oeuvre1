const express = require('express')
const AdminConrollers=require('../Controllers/admin')
const AdminConroller=require('../Controllers/acceuil')
const router=express.Router()

router.get('/admin/getAllUser', AdminConrollers. getAllUser)
router.delete('/admin/deleteAllUser/:id', AdminConrollers.deleteAllUser)
router.get('/admin/getProductAcceuil', AdminConroller.getProductAcceuil)
router.post('/admin/postUser', AdminConrollers. postUser)
router.delete('/admin/deleteAllpub/:id',AdminConroller.deleteProduct)



module.exports=router;