const db = require('../database/models') //desctructuring

const ApiAspiranteController = {
    //listado
    listAspirantes: async (req,res) => {
        const aspirantes = await db.aspirantes.findAll();
        res.json({
            aspirantes: aspirantes
        })
    }
    

}
module.exports = ApiAspiranteController;