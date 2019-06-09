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

            if (token){
                jwt.verify(req.token,"heymaynameisracheal", (err, authUser) => {
                    if(err) {
                        return {
                            "status":403,
                            "message":"Failed to authenticate"
                        };
                    }else{
                        req.user = authUser;
                        next();

                    }
                })
            }else{
                return {
                    "success":"false",
                    "message":"Auth token is not provided"
                };
            }
        }




module.exports = verifyToken
