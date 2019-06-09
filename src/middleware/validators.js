const Joi = require('joi');

const books = require("../controllers/book");

class Validations{
    postValidation(postData){
        const schema = {
            title:Joi.string().min(3).required(),
            isbn:Joi.number().integer().required(),
            description:Joi.string().min(15).max(100).required(),
            edition:Joi.required(),
            author:Joi.string().min(3).required(),
            price:Joi.number().integer().required(),
            status:Joi.required()
            
        };
    return Joi.validate(postData,schema);
    }

    registerUserValidation(postedData){
        const schema = {
            firstName: Joi.string().min(3).max(15).required(),
            lastName: Joi.string().min(3).max(25).required(),
            userName: Joi.string().min(3).max(25).required(),
            address: Joi.string().min(5).max(25).required(),
            email: Joi.string().email().required(),
            phoneNumber: Joi.number().positive().required(),
            password: Joi.string().min(3).max(15).required(),
            isAdmin:Joi.bool().valid(true, false).required(),
          };
        return Joi.validate(postedData,schema);
    }

    loginUserValidation(postedData){
        const schema = {
            email: Joi.string().email().required(),
            password: Joi.string().min(3).max(15).required(),
          };
        return Joi.validate(postedData,schema);
    }
    

    
}


const validate = new Validations();
module.exports = validate;
