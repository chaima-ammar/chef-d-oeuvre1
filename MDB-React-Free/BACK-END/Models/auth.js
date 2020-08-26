const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");

const AuthSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    // unique: true,
  },
  password: {
    type: String,
  },

  role: {
    type: String,
    required: true,
  },
  
});

AuthSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id, role: this.role }, "privateKey");
  return token;
};

module.exports = mongoose.model("Auth", AuthSchema);