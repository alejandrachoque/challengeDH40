//express
const express = require('express');
const router = express.Router();
//direccion del controller
const ApiAspiranteControllerr = require('../controllers/ApiAspiranteController');
//acceso
router.get('/',ApiAspiranteControllerr.listAspirantes)


module.exports= router