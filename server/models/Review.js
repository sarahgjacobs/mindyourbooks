const { DataTypes } = require('sequelize');
const sequelize = require('../config');


const Review = sequelize.define('Review', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Review;
