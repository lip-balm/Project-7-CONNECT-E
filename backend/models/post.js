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
        allowNull: false,
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
    }
},
    {
        sequelize,
        modelName: 'Post'
});

console.log(Post === sequelize.models.Post);
module.exports = Post;

// create table posts (employeeID INTEGER(6), name VARCHAR(255), postID INTEGER AUTO_INCREMENT, title VARCHAR(255), description TEXT, date,PRIMARY KEY (postID))