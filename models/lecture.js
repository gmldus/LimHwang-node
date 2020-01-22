module.exports = (sequelize, DataTypes) => {
    return sequelize.define('lecture',{
        id_lectures: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        name_lectures: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        id_beacon: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        start: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        end: {
            type: DataTypes.TIME,
            allowNull: false,
        },
    }, {
        timestamps: false,
    });
};