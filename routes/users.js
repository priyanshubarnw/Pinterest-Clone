const mongoose = require('mongoose');
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/pin");

const userSchema = mongoose.Schema({
  username: String, 
  name: String,
  email: String,
  password: String,
  profileImage: String,
  contact: Number, 
  boards: {
    type: Array,
    default: []
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post"
    }
  ]
});

userSchema.plugin(plm);
//Plugin added to use serializeUser and deserializeUser 

module.exports = mongoose.model("user", userSchema);
