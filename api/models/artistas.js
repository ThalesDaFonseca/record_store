'use strict';
module.exports = (sequelize, DataTypes) => {
  const Artistas = sequelize.define('Artistas', {
    nome: DataTypes.STRING,
  }, {
    paranoid:true 
  });
  Artistas.associate = function(models) {
    Artistas.hasMany(models.Discos, {
        foreignKey: "Artista_Id"
      }) 
  };
  return Artistas;
};