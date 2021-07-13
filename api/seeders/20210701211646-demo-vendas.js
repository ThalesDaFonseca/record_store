module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Vendas', [
			{
				nomeDoCliente: 'Marcos',
				Clientes_Id: 1,
       				nomeDoDisco:"Batata",
				Discos_Id: 1,
				quantidades: 1,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nomeDoCliente: 'Marcos',
				Clientes_Id: 1,
       				nomeDoDisco:"Batata",
				Discos_Id: 1,
				quantidades: 1,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nomeDoCliente: 'Marcos',
				Clientes_Id: 1,
       				nomeDoDisco:"Batata",
				Discos_Id: 1,
				quantidades: 1,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nomeDoCliente: 'Marcos',
				Clientes_Id: 3,
       				nomeDoDisco:"Batata",
				Discos_Id: 3,
				quantidades: 1,
				createdAt: new Date(),
				updatedAt: new Date()
			}
			
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Vendas', null, {})
  }
}