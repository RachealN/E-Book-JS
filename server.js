const routes = require ("./src/routes/routes");

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


app.use('/',routes)

app.get('/', (req, res) => res.status(200).send({ message: 'Welcome to my E-BookLib app' }));
const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports = app


