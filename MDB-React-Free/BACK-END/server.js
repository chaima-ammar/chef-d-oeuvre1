const express = require("express");
const connectDB = require("./config/db");
const vendeur = require ('./Routers/vendeur')
const admin = require ('./Routers/admin')
const auth = require ('./Routers/auth')
const commentaire =require('./Routers/commentaire')
const app = express();
const multer = require('multer');
const cookie = require("cookie-parser");
const bodyParser = require("body-parser");

//  var corsOptions = {
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200 
//    }
connectDB();

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  );
  next();
});
app.use(cookie());
app.use('/Antica',vendeur)
app.use('/Antica',admin)
app.use('/Antica/auth', auth);
app.use('/Antica',commentaire)
















app.use(express.static('./public'))
const storage = multer.diskStorage({
  destination: "./public",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});








// Init Upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 3000000 },

}).single("file");
app.post("/", (req, res) => {
  upload(req, res, (err) => {
    console.log("immage", req.file);
    if (err) {
      res.send({ msg: err });
    } else {
      if (req.file == undefined) {
        res.send({ msg: "Error: No File Selected!" });
      } else {
        if (req.file) res.send(req.file.filename);
        else res.send("file undifind");
        console.log(req.file);
      }
    }
  });
});



























const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running on port ${port}`));