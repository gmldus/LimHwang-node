module.exports = (sequelize, DataTypes) => {
    return sequelize.define('teach',{
        id_professors: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        id_lectures: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
    }, {
        timestamps: false,
    });
};