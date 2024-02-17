const express = require('express') ;
const app= express();

const cors = require('cors');
//apis
//app.use(methodOverride('_method'));
const apiAspirante = require('./src/routes/ApiAspiranteRoute')
const apiProfesional = require('./src/routes/ApiProfesionalRoute')
//const methodOverride = require('method-override')

app.use('/api/aspirantes', apiAspirante)
app.use('/api/profesionales', apiProfesional)

app.use(express.json());

require('dotenv').config({path:'./.env'});
const puerto=
process.env.PORT||3000;
app.listen(puerto,()=>{
    console.log('corriendo en el servidor '+puerto);
})