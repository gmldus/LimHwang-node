module.exports = (sequelize, DataTypes) => {
    return sequelize.define('professor',{
        id_professors: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        name_professors: {
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