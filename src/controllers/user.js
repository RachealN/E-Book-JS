
const {Users,userArray} = require('../models/user')
const Validations = require('../middleware/validators')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const pool = require('../services/db').pool
const dotenv = require('dotenv')



class UserController{	
	static getUser(req,res){
		const get_id = userArray.find(check_id => check_id.userId===parseInt(req.params.id));
			
			if(!get_id){
				return{
				"status":404,
				"success":"false",
				"message":" userId not found",get_id
	
		   };
		}
		   return {
			get_id,
			"message":"user with that id is succesfully retrieved ",
			"status":"200",
			"success":"true"
		}
		}
	static createUser(req,res){

		const {error} = Validations.postValidation(req.body);
		if(error){
			return {
				"status":400,
			  	"message":error.details[0].message  
		  };
			
		}
		const add = new Users ({
			userId:userArray.length + 1,
			firstName:req.body.firstName,
			lastName:req.body.lastName,
			userName:req.body.userName,
			address:req.body.address,
			phoneNumber:req.body.phoneNumber,
			email:req.body.email

				});
				
		userArray.push(add);
			return {
				"status":201,
				"success":"true",
				"message":" successfully added",
				add
				
			};
		}
	
	
	
	
	static deleteUser(req,res){
		const get_id = userArray.find(check_id => check_id.userId === parseInt(req.params.id));
	if (!get_id) {
		return{
			"status":404,
			"success":"false",
			"message":" userId not found"
		};
	}

		const index=userArray.indexOf(get_id);
		userArray.splice(index,1);
		return{
			"status":200,
			"success":"true",
			"message":" successfully deleted",
			get_id

		};


	}
	
	static updateUser(req,res){

		const {error} = Validations.postValidation(req.body);
		if(error){
			return {
				"status":400,
			  	"message":error.details[0].message  
		  };
			
		}
		const newUser = userArray.find(check_id => check_id.userId===parseInt(req.params.id));
		
		if(newUser){
			(newUser.firstName = req.body.firstName),(newUser.lastName = req.body.lastName),(newUser.email = req.body.email),(newUser.address = req.body.address)
			(newUser.userName = req.body.userName),(newUser.phoneNumber = req.body.phoneNumber)

			return{
			"status":200,
			"success":"true",
			"message":" successfully updated",newUser

	   };
	}
	return {
		"error":"user with that id is not found",
		"status":"400",
		"success":"false"
	}
	}




	static patchUser(req,res){

		const {error} = Validations.postValidation(req.body);
		if(error){
			return {
				"status":400,
			  	"message":error.details[0].message  
		  };
			
		}
		const User = userArray.find(check_id => check_id.userId===parseInt(req.params.id));
		
		if(User){
			(User.address = req.body.address)
			return{
			"status":200,
			"success":"true",
			"message":" successfully updated",User

	   };
	}
	return {
		"error":"user with that id is not found",
		"status":"400",
		"success":"false"
	}
		

	}


	
	static signUp(req,res){
		// const {error} = Validations.registerUserValidation(req.body);
		// if(error){
		// 	return {
		// 		"status":400,
		// 	  	"message":error.details[0].message  
		//   };
			
		// }
		const userResult = userArray.find(user => req.body.email === user.email);
		if(userResult) return{
			"status":400,
			"Error":"User with this email already exist"
		};
		
		else{
			const newUser = new Users ({
				userId:userArray.length + 1,
				firstName:req.body.firstName,
				lastName:req.body.lastName,
				userName:req.body.userName,
				address:req.body.address,
				phoneNumber:req.body.phoneNumber,
				email:req.body.email,
				password:req.body.password,
				isAdmin:req.body.isAdmin
	
					});
					
			userArray.push(newUser);
			const token = jwt.sign({newUser}, "heymaynameisracheal",{  expiresIn: 1440 });
			return [{
				"status":201,
				"success":"true",
				"message":" successfully registered",
				newUser,token
				
			}];

		}

	}




	static login(req,res){
		// const {error} = Validations.loginUserValidation(req.body);
		// if(error){
		// 	return {
		// 		"status":400,
		// 	  	"message":error.details[0].message  
		//   };
			
		// }
		const  {email,password}  =  req.body;
		const user = userArray.find(e =>(email === e.email && password === e.password ));
		if (user ){
			const token = jwt.sign({user}, "heymaynameisracheal",{  expiresIn: 1440 });
			return [{
				"status":200,
				"success":"true",
				"message":" Authentication succesful",
				user
			}];
		}else{
			return {
				"status":false,
				"message":"Authentication failed! Incorrect email and password"
			}

		}
	}

	
	}

    
module.exports = UserController