const Joi = require('joi');

const books = require("../controllers/book");

class Book{
    static createBook(req,res){
        const Schema = {
             		title:Joi.string().min(3).required(),
             		isbn:Joi.number().integer().required(),
             		description:Joi.string().min(15).max(100).required(),
            		edition:Joi.required(),
            		author:Joi.string().min(3).required(),
            		price:Joi.number().integer().required(),
            	    status:Joi.required()
                };
                const{error} = validateBook({
                    title: req.body.title,
                    isbn: req.body.isbn,
                    description: req.body.description,
                    edition: req.body.edition,
                    author: req.body.author,
                    price: req.body.price,
                    status:req.body.status,
                  }, Schema, {
                    abortEarly: false,
                  });
                  if (error)  {
                    return {
                        "status":400,
                        "message":error.details[0].message  
			};
		 }
    }
}


module.exports = Book
