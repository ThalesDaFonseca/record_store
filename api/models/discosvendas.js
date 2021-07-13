'use strict';
module.exports = (sequelize, DataTypes) => {
  const DiscosVendas = sequelize.define('DiscosVendas', {
  // Valores da tabela
  }, {
    paranoid:true 
  });
  DiscosVendas.associate = function(models) {
    // associations can be defined here
  };
  return DiscosVendas;
};