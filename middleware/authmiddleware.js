const JWT = require('jsonwebtoken')


module.exports = async(req,res,next)=>{
    try {
           const token = req.headers["authorization"].split(" ")[1]
           JWT.verify(token,process.env.JWT_TOKEN,(err,decode)=>{
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: "unauthorized",
                  });
            }
            else {
                req.body.id = decode.id
                next()
            }
           })



    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Please provide Auth Token",
        error,
    })
        
    }
}