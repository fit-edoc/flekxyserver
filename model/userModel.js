const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "user name is required"],
  },

  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  address: {
    type: Array,
  },
  name:{
    required:true,
    type:String,
  }
});

module.exports = mongoose.model("User",userSchema)
