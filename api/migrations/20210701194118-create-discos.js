'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Discos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomeDisco: {
        type: Sequelize.STRING
      },
      valorDisco: {
        type: Sequelize.STRING
      },
      disponivel: {
        type: Sequelize.BOOLEAN
      },
      Artista_Id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{model :"Artistas", key: "id"}
      },
      quantidadeEstoque: {
        allowNull:false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull:true,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Discos');
  }
};