const Joi = require('joi');
const {Books,bookArray} = require('../models/book')
const {validateBook} = require('../middleware/validators')

class BookController {
	static getBooks(req,res){
		return {
			"status":200,
			"success":"true",
			"message":"retrieved successfully",
			"books":bookArray 
		};
	}
	static getBook(req,res){
		const get_id = bookArray.find(check_id => check_id.bookId===parseInt(req.params.id));
		
		if(!get_id){
			return{
			"status":404,
			"success":"false",
			"message":" bookId not found",get_id

	   };
	}
	   return {
		get_id,
		"message":"book found",
		"status":"200",
		"success":"true"
	}
	}
	static createBook(req,res){

		// const{error} = validateBook(req.body);
		// if (error)  {
		// 	return {
		// 		"status":400,
		// 		"message":error.details[0].message  
		// 	};
		// }
		const add = new Books ({
			bookId:bookArray.length + 1,
			title:req.body.title,
			isbn:req.body.isbn,
			description:req.body.description,
			date_of_publication:req.body.date_of_publication,
			edition:req.body.edition,
			author:req.body.author,
			price:req.body.price,
			status:req.body.status

				});
	// // Validation function
		// function validateBook(bookArray){
		// 	const schema = {
		// 		title:Joi.string().min(3).required(),
		// 		isbn:Joi.number().integer().required(),
		// 		description:Joi.string().min(15).max(100).required(),
		// 		edition:Joi.required(),
		// 		author:Joi.string().min(3).required(),
		// 		price:Joi.number().integer().required(),
		// 		status:Joi.required()
		// 	};
		// 	return Joi.validate(bookArray,schema);
		// }
				

		bookArray.push(add);
			return {
				"status":200,
				"success":"true",
				"message":" successfully added",
				add
				
			};
		}
	static deleteBook(req,res){
		const get_id = bookArray.find(check_id => check_id.bookId === parseInt(req.params.id));
	if (!get_id) {
		return{
			"status":200,
			"success":"true",
			"message":" bookId not found"
		};
	  }
		const index=bookArray.indexOf(get_id);
		bookArray.splice(index,1);
		return{
			"status":200,
			"success":"true",
			"message":" successfully deleted",
			get_id

		};


	}
	
	static updateBook(req,res){
		const newBook = bookArray.find(check_id => check_id.bookId===parseInt(req.params.id));
		
		if(!newBook){
			return{
			"status":404,
			"success":"false",
			"message":" bookId not found",newBook

	   };
	}

	// const bookArray = req.body.bookArray;
	newBook.bookArray = req.body.bookArray;
	return {
		newBook,
		"message":"successfully updated",
		"status":"200",
		"success":"true"
	}
	}
	

	// const bookArray = req.body.bookArray;
	// 	return{
	// 		"status":200,
	// 		"success":"true",
	// 		"message":" successfully updated",
	// 		get_id

	// 	};


	// }

	static patchBook(req,res){
		"Not implemented"
	}
}
    
    
module.exports = BookController