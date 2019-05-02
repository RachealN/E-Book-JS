const {Categories,categoryArray} = require('../models/category')

class CategoryController {
	static getCategories(req,res){
		return {
			"status":200,
			"success":"true",
			"message":"retrieved successfully",
			"categories":categoryArray
		};
	}
	static getCategory(req,res){
			const get_id = categoryArray.find(check_id => check_id.categoryId===parseInt(req.params.id));
			
			if(!get_id){
				return{
				"status":404,
				"success":"false",
				"message":" category not found",get_id
	
		   };
		}
		   return {
			get_id,
			"message":"category with that id is succesfully retrieved",
			"status":"200",
			"success":"true"
		}
		}
	static createCategory(req,res){
		const add = new categories ({
			categoryId:categoryArray.length + 1,
			categoryName:req.body.categoryName

				});
				if(!req.body.categoryName) return {
					"status":400,
					"success":"false",
					"message":" categoryName is required",
				};
				
				
		categoryArray.push(add);
			return {
				"status":200,
				"success":"true",
				"message":" successfully added",
				add
				
			};
		}
	static deleteCategory(req,res){
		const get_id = categoryArray.find(check_id => check_id.categoryId === parseInt(req.params.id));
	if (!get_id){
		 return{
			"status":200,
			"success":"true",
			"message":" categoryId not found"
		};
	}

		const index=categoryArray.indexOf(get_id);
		categoryArray.splice(index,1);
		return{
			"status":200,
			"success":"true",
			"message":" successfully deleted",
			get_id

		};


	}
	
	static updateCategory(req,res){
		const newCategory = categoryArray.find(g => g.categoryId === parseInt(req.params.categoryId));
		if (!categoryArray) return{
			"status":200,
			"success":"true",
			"message":" The category with the given ID was not found ",
			get_id

		};

		const categoryArray = req.body.categoryArray;
		return{
			"status":200,
			"success":"true",
			"message":" successfully updated",
			get_id

		};


	}

	static patchCategory(req,res){
		"Not implemented"
	}
}
    
    
module.exports = CategoryController