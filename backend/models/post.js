const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class Post extends Sequelize.Model {}

Post.init({
    employeeID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    postID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    date: {
        type: DataTypes.TIMESTAMP,
        defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
    },
    imageURL: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    readby: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    postreadby: {
        type: DataTypes.JSON,
        allowNull: true,
    }
},
    {
        sequelize,
        modelName: 'Post'
});

console.log(Post === sequelize.models.Post);
module.exports = Post;