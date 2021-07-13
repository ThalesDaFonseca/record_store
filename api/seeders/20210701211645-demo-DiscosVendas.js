module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('DiscosVendas', [
			{
        Discos_Id: 4,
        Clientes_Id: 4,
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        Discos_Id:5,
        Clientes_Id:5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Discos_Id:6,
        Clientes_Id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('DiscosVendas', null, {})
  }
}