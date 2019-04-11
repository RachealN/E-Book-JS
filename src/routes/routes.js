const express = require("express")
const TodolistController = require('../controllers/todolist')




const app = express()



app.get('/api/todolists', TodolistController.getALLtodos);





export default app;



