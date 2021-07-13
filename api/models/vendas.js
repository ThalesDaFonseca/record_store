'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vendas = sequelize.define('Vendas', {
    nomeDoCliente: DataTypes.STRING,
    nomeDoDisco: DataTypes.STRING,
    quantidades: DataTypes.INTEGER
  }, {
    paranoid:true 
  });
  Vendas.associate = function(models) {
    Vendas.belongsToMany(models.Discos,{ through: 'DiscosVendas'})
    Vendas.belongsToMany(models.Clientes,{through:'DiscosVendas'})
  };
  return Vendas;
};