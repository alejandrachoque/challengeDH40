module.exports = (sequelize, dataTypes) => { // cambiar nombres
    let alias = 'aspirantes';
    let cols = {
        id_aspirante: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        dni: {
            type: dataTypes.INTEGER(9),
            allowNull: false
        },
        nombre: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        apellido: {
            type: dataTypes.STRING(50),
            allowNull: false
        }
        ,
        email: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
        ,
        telefono: {
            type: dataTypes.INTEGER(20),
            allowNull: false
        }
        ,
        linkedin_link: {
            type: dataTypes.STRING(255),
            allowNull: false
        }
        ,
        fecha_de_nacimiento: {
            type: dataTypes.DATE,
            allowNull: false
        }
        ,
        sexo: {
            type: dataTypes.CHAR(1),
            allowNull: false
        },
        imagen: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        id_profesion: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
    };
    let config = {
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        deletedAt: 'deleteddAt'
    }
    const Aspirantes = sequelize.define(alias, cols, config); 

    Aspirantes.associate = function (models) {
        Aspirantes.hasMany(models.profesiones, {
            as: "profesiones",
            foreignKey: 'id',
            //timestamps: true
        })
    }

    return Aspirantes
};