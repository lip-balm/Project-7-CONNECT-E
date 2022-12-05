const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class User extends Sequelize.Model {}

User.init({
    employeeID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bio: {
        type: DataTypes.TEXT,
        allowNull: true,
    }
},
    {
        sequelize,
        modelName: 'User'
});

console.log(User === sequelize.models.User);
module.exports = User;