module.exports = (sequelize, DataTypes) => {
    return sequelize.define('proLecture',{
        professors: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        proLectures: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
    }, {
        timestamps: false,
    });
};