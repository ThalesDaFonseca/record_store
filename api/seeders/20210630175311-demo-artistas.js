module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Artistas', [
			{
				nome: 'Ana Souza',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Marcos Cintra',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Felipe Cardoso',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Sandra Gomes',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Paula Morais',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Sergio Lopes',
				createdAt: new Date(),
				updatedAt: new Date()
			}
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Artistas', null, {})
  }
}