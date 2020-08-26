const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const _ = require("lodash");
require("cookie-parser")();
const User = require("../Models/auth");

module.exports = {
  /********************************inscription************************* */
  register: async (req, res) => {
    try {
      const { name, email, password, role } = req.body;

      user = new User({
        name,
        email,
        password,
        role,
      });
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();
      /********************************/
      // const token = user.generateAuthToken(); //héritage des méthodes
      // res.json({ token });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error"); // 500 données fausses
    }
  },
  /******************************************connexion***************** */
  login: async (req, res) => {
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).send("email ou password sont incorrects");
    }

    const checkPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!checkPassword) {
      return res.status(401).send("email ou password sont incorrects");
    }
    try {
      let token = user.generateAuthToken();
res.cookie("token", token,{expires: new Date(Date.now() + 900000000),httpOnly: true}).send("is login")
       
    } catch (err) {
      console.log(err);
    }
  },

  /********************************* get profil *********************** */
  getProfil: async (req, res) => {
   
    const user = await User.findById(req.user._id).select("-password");
    res.send(user);
  },
  logout: async (req, res) => { res.clearCookie("token").send("token deleted");
},
};