const userModel = require("../model/userModel");
const JWT = require('jsonwebtoken')
const bcrypt = require("bcryptjs");

const registerController = async (req, res) => {
  try {
    const { username, name, address, email, password } = req.body;

    if (!username || !name || !address || !email  || !password) {
      return res
        .status(500)
        .send({ success: false, message: "Please PRovide all fields" });
    }

    const isexisting = await userModel.findOne({ email });

    if (isexisting) {
      return res
        .status(500)
        .send({ success: false, message: "already registered" });
    }
    const salt = bcrypt.genSaltSync(10)

    const hashPassword =  await bcrypt.hash(password, salt);
    
    const user = await userModel.create({
      email,
      password:hashPassword,
      name,
      address,
      username,
      
    });

    return res
      .status(200)
      .send({ success: true, message: "registered succesfully", user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "api not working" });
  }
};

const loginController = async(req,res)=>{

  try {
      const {email ,password} = req.body;
      //validfatuion
      if (!email || !password) {
        return res.status(500).send({
          success: false,
          message: "Please PRovide EMail OR Password",
        });
      }
      //check user
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.status(404).send({
          success: false,
          message: "email does not match",
        })
  } 



  const isMatch = await bcrypt.compare(password, user.password)
  if(!isMatch){
     return res.status(500).send({
         success:false,
         message:"password did not match"
     })
  }
  // return res.status(500).send({success: true,message: 'login success',user});
const token = JWT.sign({id:user._id},process.env.JWT_TOKEN ,{expiresIn:"7d"})
  res.status(200).send(
      {success:true,
      message:"login sucessfully",
      user,
      token
  
  })
}

  
  
  catch (error) {
      res.status(500).json({ error: error.message });
  }
}

const UserDetail = (req,res)=>{

  try {
    

  }
  catch{

  }
}


module.exports = { registerController, loginController };
