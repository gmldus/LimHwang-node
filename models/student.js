module.exports = (sequelize, DataTypes) => {
    return sequelize.define('student',{
        id_students: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        name_students: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        birth: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        major: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
    }, {
        timestamps: false,
    });
};