const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database');

const ContactSchema = mongoose.Schema({
  UserName:{
    type:String,
    require:true,
    unique:true
  },
  Password:{
    type:String,
    require:true
  },
  Name:{
    type:String,
    require:true
  },
  contacts:[]

  });
const Contact = module.exports = mongoose.model("Contact", ContactSchema);
module.exports.addUser= (user,callback)=>{
  Contact.create(user,callback)
}

module.exports.authenticate = (user, callback) => {
  query = {
      UserName: user.UserName,
      Password: user.Password
  }
  Contact.findOne(query, callback);
}
