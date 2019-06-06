const books = require("./src/routes/routes");
const authors = require("./src/routes/routes");
const users = require("./src/routes/routes");
const borrowers = require("./src/routes/routes");
const categories = require("./src/routes/routes");
const rules = require("./src/routes/routes");

const resolveSoa = require('dns');
const express = require("express");
const moment = require("moment");
const uuid = require("uuid");
const Joi = require('joi');
const bodyParser = require("body-parser");
const jwt    = require('jsonwebtoken');




const app = express()

app.use(bodyParser.json());
app.use(express.json());

app.use('/', books);
app.use('/', authors);
app.use('/',users);
app.use('/',categories);
app.use('/',rules);





app.get('/', (req, res) => res.status(200).send({ message: 'Welcome to my Todolist app' }));





const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports = app


