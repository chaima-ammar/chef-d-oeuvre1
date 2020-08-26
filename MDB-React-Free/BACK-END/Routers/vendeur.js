const express = require('express')
const VendeurConrollers=require('../Controllers/vendeur')
const router=express.Router()
router.get('/vendeur/getProduct', VendeurConrollers.getProduct)
router.get('/vendeur/getProductByid/:id', VendeurConrollers. getProductbyid)
router.post('/vendeur/postProduct', VendeurConrollers.postProduct)
router.delete('/vendeur/deleteProduct/:id',VendeurConrollers.deleteProduct)
router.patch('/vendeur/patchProduct/:id',VendeurConrollers.patchProduct)




module.exports=router;