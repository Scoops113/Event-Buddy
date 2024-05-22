const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {};

User.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: false,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User;