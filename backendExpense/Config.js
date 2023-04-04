const Sequelize = require('sequelize');
const sequelize = new Sequelize('sanjaydb1','root','Sanjaybhai4581',{
    host:'localhost',
    dialect:'mysql'
});



module.exports= sequelize;