//express
const express = require('express');
const router = express.Router();
//direccion del controller
const ApiProfesionalController = require('../controllers/ApiProfesionalController');
//acceso
router.get('/',ApiProfesionalController.listProfesiones)


module.exports= router;