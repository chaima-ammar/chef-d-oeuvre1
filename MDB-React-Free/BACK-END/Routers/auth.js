const route = require("express").Router();

const authentifController = require("../Controllers/auth");
const verif=require('../Controllers/authCokies')

route.post("/register", authentifController.register);
route.post("/login", authentifController.login);
route.get("/profil",verif,authentifController.getProfil);
route.post("/logout",authentifController.logout)
module.exports = route;