'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _dns = require('dns');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.json());

app.get('/', function (req, res) {
    return res.status(200).send({ 'message': 'congratulations1' });
}).listen(8081);
console.log('server running at http://127.0.0.1:8081/');