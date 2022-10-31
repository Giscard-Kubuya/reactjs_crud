const express = require('express');
const routerHandler = express();

routerHandler.use('/users',require('./users/user.route'));

module.exports = routerHandler;