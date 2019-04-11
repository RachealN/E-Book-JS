// import {Todolist,todolistArray} from '../models/todolist'
const {Todolist,todolistArray} = require('../models/todolist')

class TodolistController{
	static getALLtodos(req,res){
		return res.status(200).send({
			status:200,
			success:"true",
			message:"retrieved successfully",
			todos:todolistArray
		});
    }
    
// export default TodolistController;
// exports {TodolistController};


    
module.exports = TodolistController