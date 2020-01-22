module.exports = (sequelize, DataTypes) => {
    return sequelize.define('login',{
        login_id: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        login_password: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        timestamps: false,
    });
};