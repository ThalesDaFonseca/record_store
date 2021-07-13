'use strict';
module.exports = (sequelize, DataTypes) => {
  const Discos = sequelize.define('Discos', {
    nomeDisco: DataTypes.STRING,
    valorDisco: DataTypes.STRING,
    disponivel: DataTypes.BOOLEAN,
    quantidadeEstoque: DataTypes.INTEGER
  }, {
    paranoid:true,
    defaultScope:{
      where:{
        disponivel: true
      }
    } 
  });
  Discos.associate = function(models) {
     Discos.belongsTo(models.Artistas, {
        foreignKey: "Artista_Id"
      }),

      Discos.belongsToMany(models.Vendas,{through:'DiscosVendas'})
  };
  return Discos;
};