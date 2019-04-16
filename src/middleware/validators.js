// const Joi = require('joi');

// const BookController = require('../controllers/book')
// const AuthorController = require('../controllers/author')
// const  UserController = require('../controllers/user')
// const BorrowingController = require('../controllers/borrow')
// const CategoryController = require('../controllers/category')
// const RulesController = require('../controllers/rules')



//     class validateBook{
//         static postBook(req,res,next){
//             const schema = {
// 				title:Joi.string().min(3).required(),
// 				isbn:Joi.number().integer().required(),
// 				description:Joi.string().min(15).max(100).required(),
// 				edition:Joi.required(),
// 				author:Joi.string().min(3).required(),
// 				price:Joi.number().integer().required(),
// 				status:Joi.required()
// 			};
// 			return Joi.validate(bookArray,schema);
// 		}
//         };
//         // const{error} = Joi.validate({
//         //     title:req.body.title,
//         //     isbn:req.body.isbn,
//         //     description: req.body.description,
//         //     edition: req.body.edition,
//         //     author: req.body.author,
//         //     price: req.body.price,
//         //     status: req.body.status,
//         // },schema,{
//         //     abortEarly:false,

//         // });
// 		if (error)  {
// 			return {
// 				"status":400,
// 				"message":error.details[0].message  
// 			};
//         }
       
// module.exports = validateBook
   
        
            