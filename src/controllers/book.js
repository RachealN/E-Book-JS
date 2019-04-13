
const {Books,bookArray} = require('../models/book')

class BookController {
	static getBooks(req,res){
		return {
			"status":200,
			"success":"true",
			"message":"retrieved successfully",
			"todos":bookArray
		};
	}
	static getBook(req,res){
		const get_id=bookArray.find(check_id => check_id.bookId===parseInt(req.params.bookId));
	   if(!get_id)return{
			"status":200,
			"success":"true",
			"message":" bookId retrieved successfully",
			get_id,

	   };
	}
	static createBook(req,res){
		const add = new Books ({
			bookId:todolistArray.length + 1,
			title:req.body.title,
			isbn:req.body.isbn,
			description:req.body.description,
			date_of_publication:req.body.date_of_publication,
			edition:req.body.edition,
			author:req.body.author,
			price:req.body.price,
			status:req.body.status

				});
				if(!req.body.title) return {
					"status":400,
					"success":"false",
					"message":" title is required",
				};
				
				if(!req.body.isbn) return {
					"status":400,
					"success":"false",
					"message":" isbn is required",
				};
				
				if(!req.body.edition) return {
					"status":400,
					"success":"false",
					"message":" edition is required",
				};

				if(!req.body.author) return {
					"status":400,
					"success":"false",
					"message":" author is required",
				};

				if(!req.body.price) return {
					"status":400,
					"success":"false",
					"message":"price is required",
				};

				if(!req.body.status) return {
					"status":400,
					"success":"false",
					"message":" status is required",
				};

				if(!req.body.description) return {
					"status":400,
					"success":"false",
					"message":" description is required",
				};
				
		
		
		bookArray.push(add);
			return {
				"status":200,
				"success":"true",
				"message":" successfully added",
				add
				
			};
		}
	static deleteBook(req,res){
		const get_id = todolistArray.find(check_id => check_id.bookId === parseInt(req.params.bookId));
	if (!get_id) return{
			"status":200,
			"success":"true",
			"message":" bookId not found"
		};

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
		const newTBook = bookArray.find(g => g.bookId === parseInt(req.params.bookId));
		if (!bookArray) return{
			"status":200,
			"success":"true",
			"message":" The book with the given ID was not found ",
			get_id

		};

		const bookArray = req.body.bookArray;
		return{
			"status":200,
			"success":"true",
			"message":" successfully updated",
			get_id

		};


	}

	static patchBook(req,res){
		"Not implemented"
	}
}
    
    
module.exports = BookController