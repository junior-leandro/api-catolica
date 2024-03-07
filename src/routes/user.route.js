const route = require('express').Router();


const userControler = require('../controllers/user.controller');

route.get("/", userControler.soma);


module.exports = route;