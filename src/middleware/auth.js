const jwt = require('jsonwebtoken');
const config = require('config');
const express = require("express");

const app = express()
 
module.exports = function (req, res, next) {
 
    const token = req.header('x-auth-token');
    if(req.body.username==="racheal"){

        if(req.body.password===12345){
             //if eveything is okay, create a token 

        const payload = {

            check:  true

          };

          const token = jwt.sign(payload, app.get('heymynameisracheal'), {
                expiresIn: 1440 // expires in 24 hours

          });


          res.json({
            message: 'authentication done ',
            token: token
            
          });
        
        console.log(token);
        }else{
            res.json({message:"please check your password !"})
        }

    }else{

        res.json({message:"user not found !"})

    }

};


