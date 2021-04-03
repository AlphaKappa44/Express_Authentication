const Sequelize = require('sequelize');
const sequelize = require('../database');
class Type extends Sequelize.Model {};

class Type extends Sequelize.Model {};

Type.init({
    name: Sequelize.STRING,
    color: Sequelize.STRING
},{
    sequelize,
    tableName: "type"
});

module.exports = type