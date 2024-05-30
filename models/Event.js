const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Event extends Model {
}

Event.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        },
    time: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'id',
        },
    },
    },
    {
          sequelize,
          timestamps: false,
          freezeTableName: false,
          underscored: true,
          modelName: 'event',
    }
);

module.exports = Event;