
const {Users,userArray} = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')




class UserController {
	static getUsers(req,res){
		return {
			"status":200,
			"success":"true",
			"message":"retrieved successfully",
			"users":userArray
		};
	}
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
		const newUser = userArray.find(g => g.userId === parseInt(req.params.userId));
		if (!userArray) return{
			"status":200,
			"success":"true",
			"message":" The user with the given ID was not found ",
			get_id

		};

		const userArray = req.body.userArray;
		return{
			"status":200,
			"success":"true",
			"message":" successfully updated",
			get_id

		};


	}
	static signUp(req,res){
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
			const token = jwt.sign({newUser:this.newUser,isAdmin:this.isAdmin}, "heymaynameisracheal",{  expiresIn: 1440 });
			return [{
				"status":201,
				"success":"true",
				"message":" successfully registered",
				newUser,token
				
			}];

		}

	}
	static login(req,res){
		const  {email,password}  =  req.body;
		const user = userArray.find(e =>(email === e.email && password === e.password ));
		if (user ){
			const token = jwt.sign({user}, "heymaynameisracheal",{  expiresIn: 1440 });
			return [{
				"status":200,
				"success":"true",
				"message":" Authentication succesful",
				user,token
				
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