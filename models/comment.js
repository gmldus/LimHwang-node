module.exports = (sequelize, DataTypes) => {
    return sequelize.define('comment',{
        commenter: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        comment: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: sequelize.literal('now()'),
        },
    }, {
        timestamps: false,
    });
};