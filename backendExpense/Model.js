const sequelize = require('./Config');
const {Sequelize, DataTypes} = require('sequelize');


const User = sequelize.define('User', {
    // Model attributes are defined here
    Amount: {
      type: DataTypes.CHAR,
      
    },
    Description: {
      type: DataTypes.STRING
      // allowNull defaults to true
    }
  }, {
    // Other model options go here
  });

  module.exports=User;