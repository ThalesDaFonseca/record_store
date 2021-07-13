'use strict';
module.exports = (sequelize, DataTypes) => {
  const Clientes = sequelize.define('Clientes', {
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    telefone: DataTypes.STRING
  }, {
    paranoid:true 
  });
  Clientes.associate = function(models) {
     Clientes.belongsToMany(models.Vendas,{through: 'DiscosVendas'})
  };
  return Clientes;
};