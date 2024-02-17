const db = require('../database/models') //desctructuring

const ApiProfesionalController = {
    //listado
    listProfesiones: async (req,res) => {
        const profesiones = await db.profesiones.findAll({attributes: ['nombre'], raw: true});
        res.json({
            profesiones
        })
    }
    

}
module.exports = ApiProfesionalController;