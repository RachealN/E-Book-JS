const jwt = require('jsonwebtoken');
const  UserController = require('../controllers/user')

function verifyToken(req,res,next){
    if(!req.headers.authorization){
        return {
            "status":403,
            "message":"No authorization provided"
        }
        }
        
    const token = req.headers.authorization.split(" ")[1]
            if(!token)
            return{
                "status":403,
                "message":"No token provided"
            }

            if (token){
                jwt.verify(token,"heymaynameisracheal", (err, decoded) => {
                    if(err) {
                        return {
                            "status":400,
                            "message":"Failed to authenticate"
                        };
                    }else{
                        req.user = decoded;
                        next();

                    }
                })
            }else{
                return {
                    "success":"false",
                    "message":"Auth token is not supplied"
                };
            }
        }




module.exports = verifyToken
