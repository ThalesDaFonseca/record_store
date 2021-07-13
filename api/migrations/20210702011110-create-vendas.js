'use strict';

const { sequelize } = require("../models");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Vendas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomeDoCliente: {
        type: Sequelize.STRING
      },
      Clientes_Id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{model:"DiscosVendas", key: "Clientes_Id"}
      },
      nomeDoDisco: {
        type: Sequelize.STRING
      },
      Discos_Id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{model:"DiscosVendas", key: "Discos_Id"}
      },
      quantidades: {
        allowNull: false,
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
    return queryInterface.dropTable('Vendas');
  }
};