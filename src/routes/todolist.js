const express = require("express")



const app = express()



app.get('/api/todolists', TodolistController.getALLtodos);




export default app;



