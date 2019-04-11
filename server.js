// import router from './routes/routes.js';
// const router = require('./routes/routes.js')
// const Todolist = require('./controllers/todolist')





const resolveSoa = require('dns')
const express = require("express")
const moment = require("moment");
const uuid = require("uuid");
const Joi = require('joi')

const app = express()

app.use(express.json());



app.get('/', (req, res) => res.status(200).send({ message: 'Welcome to my Todolist app' }));




// todo = []



// app.post('/api/todolists',(req,res) => {

//      const newTodo= {
//         id: todo.length + 1,
//         successs:true,
//         Todo: req.body.Todo,
//         description:req.body.description,
//         createdDate:moment.now(),
//         modifiedDate:moment.now()
//     }
//         todo.push(newTodo);
//     if(!req.body.newTodo ){
//         return res.json({'status':'error','message':'not created'});
//     }else {
//         return res.status(201).json({
//             data:newTodo,
//             message:'Todo successfully created',
//             'status':'201'});
//     }
// });

// // app.get('/api/todolists', (req, res) => {
// //     res.json(todo);
// // });




// app.get('/api/todolists', Todolist.getAll);
// app.get('/api/todolists',(req,res) => TodolistController.getAlltodos);


// app.get('/api/todolists/:id', (req, res) => {
//     const newTodo = todo.find(g => g.id === parseInt(req.params.id));
//     if (!todo) return res.status(404).send('The todo with the given ID was not found.');
//     res.send(todo);
// });



// app.put('/api/todolists/:id', (req, res) => {
//     const newTodo = todo.find(g => g.id === parseInt(req.params.id));
//     if (!todo) return res.status(404).send('The todo with the given ID was not found.');
 
 
//     todo.todo = req.body.todo;
//     res.send(todo);
// });

// app.delete('/api/todolists/:id', (req, res) => {
//     const newTodo = todo.find(g => g.id === parseInt(req.params.id));
//     if (!todo) return res.status(404).send('The todo with the given ID was not found.');
 
//     const index = todo.indexOf(todo);
//     todo.splice(index, 1);
 
//     res.send(todo);
// });


const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`Listening on port ${port}...`));

// export default app;
module.exports = app

