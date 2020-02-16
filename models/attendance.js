module.exports = (sequelize, DataTypes) => {
    return sequelize.define('attendance',{
        id_students: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        id_lectures: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            primaryKey: true,
        },
        state: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        check_time: {
            type: DataTypes.TIME,
            allowNull: false,
        }
    }, {
        timestamps: false,
    });
};