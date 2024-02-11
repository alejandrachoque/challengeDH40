module.exports = (sequelize, dataTypes) => {
    let alias = 'profesiones';
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING(50),
            allowNull: false
        }
    };
    let config = {
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        deletedAt: 'deleteddAt'
    }
    const Profesiones = sequelize.define(alias, cols, config); 

    Profesiones.associate = function (models) {
        Profesiones.belongsTo(models.aspirantes, {
            as: "aspirantes",
            foreignKey: 'id_profesion',
            //timestamps: true
        })
    }

    return Profesiones
};