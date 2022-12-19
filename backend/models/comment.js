const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class Comment extends Sequelize.Model {}

Comment.init({
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
        allowNull: false,
    },
    commentID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    comment: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    date: {
        type: DataTypes.TIMESTAMP,
        defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
    },
},
    {
        sequelize,
        modelName: 'Comment'
});

console.log(Comment === sequelize.models.Comment);
module.exports = Comment;