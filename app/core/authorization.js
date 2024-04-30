
const jwt = require('jsonwebtoken');
const { userModel } = require('./db/user');




const user_check_token = async (req, res, next) => {
  let user = req.body.userid 
  
    const checkuser = await userModel.findById(user)
  if (!checkuser) {
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: "user does not exist",
  
      error: "user does not exist",
    });
  }
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      try {
          token = req.headers.authorization.split(' ')[1] // gotten the token, now we will decode it

          const decoded = jwt.verify(token, 'useruworld')
        const user = decoded.user
        console.log('posis' , user , user)
        if (user != user) {
          console.log('posis' )
          return res.status(400).json({
            status_code: 400,
            status: false,
            message: "invalid token",
        
            error: "invalid token",
          });
         }

       next()
      } catch (error) {
        console.log(error)
          return res.status(400).json({
            status_code: 400,
            status: false,
            message: "invalid token",
        
            error: "invalid token",
          });
      }
    }
    if (!token) {
        return res.status(400).json({
            status_code: 400,
            status: false,
            message: "invalid token",
        
            error: "invalid token",
          });
    }
}



module.exports = {
    user_check_token 
}