const {Authors,authorArray} = require('../models/author')

class AuthorController {
	static getAuthors(req,res){
		return {
			"status":200,
			"success":"true",
			"message":"retrieved successfully",
			"authors":authorArray
		};
	}
	static getAuthor(req,res){
		const get_id=authorArray.find(check_id => check_id.authorId===parseInt(req.params.authorId));
	   if(!get_id)return{
			"status":200,
			"success":"true",
			"message":" bookId retrieved successfully",
			get_id,

	   };
	}
	static createAuthor(req,res){
		const add = new Authors ({
			authorId:authorArray.length + 1,
			firstName:req.body.firstName,
			lastName:req.body.lastName,
			address:req.body.address,
			phoneNumber:req.body.phoneNumber

				});
				if(!req.body.firstName) return {
					"status":400,
					"success":"false",
					"message":" firstName is required",
				};
				
				if(!req.body.lastName) return {
					"status":400,
					"success":"false",
					"message":" lastName is required",
				};
				
				if(!req.body.address) return {
					"status":400,
					"success":"false",
					"message":" address is required",
				};

				if(!req.body.phoneNumber) return {
					"status":400,
					"success":"false",
					"message":" phoneNumber is required",
				};

				
				
		
		
		authorArray.push(add);
			return {
				"status":200,
				"success":"true",
				"message":" successfully added",
				add
				
			};
		}
	static deleteAuthor(req,res){
		const get_id = authorArray.find(check_id => check_id.authorId === parseInt(req.params.authorId));
	if (!get_id) return{
			"status":200,
			"success":"true",
			"message":" authorId not found"
		};

		const index=bookArray.indexOf(get_id);
		authorArray.splice(index,1);
		return{
			"status":200,
			"success":"true",
			"message":" successfully deleted",
			get_id

		};


	}
	
	static updateAuthor(req,res){
		const newAuthor = authorArray.find(g => g.authorId === parseInt(req.params.authorId));
		if (!authorArray) return{
			"status":200,
			"success":"true",
			"message":" The author with the given ID was not found ",
			get_id

		};

		const authorArray = req.body.authorArray;
		return{
			"status":200,
			"success":"true",
			"message":" successfully updated",
			get_id

		};


	}

	static patchAuthor(req,res){
		"Not implemented"
	}
}
    
    
module.exports = AuthorController