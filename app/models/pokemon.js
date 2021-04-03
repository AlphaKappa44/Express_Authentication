const Sequelize = require('sequelize');
const sequelize = require('../database');
class Pokemon extends Sequelize.Model {};

Pokemon.init({
    nom: Sequelize.STRING, 
    pv: Sequelize.INTEGER, 
    attaque: Sequelize.INTEGER, 
    defense: Sequelize.INTEGER, 
    attaque_spe: Sequelize.INTEGER, 
    defense_spe: Sequelize.INTEGER, 
    vitesse: Sequelize.INTEGER, 
    numero: Sequelize.INTEGER
}, {
    sequelize,
    tableName: "pokemon"
});

module.exports = Pokemon;