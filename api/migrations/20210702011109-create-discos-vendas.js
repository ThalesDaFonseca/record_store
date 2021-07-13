'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('DiscosVendas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Discos_Id:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{model:"Discos", key: "id"}
      },
      Clientes_Id:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{model:"Clientes", key: "id"}
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
    return queryInterface.dropTable('DiscosVendas');
  }
};