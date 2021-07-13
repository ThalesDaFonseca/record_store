module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Clientes', [
			{
				nome: 'Marcos',
        		email: "Marcos@marcos.com",
        		cpf: "123.456.789.10",
        		telefone:"1123456",
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Marcela',
        		email:"Marcela@Marcela.com",
        		cpf: "09754322",
        		telefone:"123456789",
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Menino',
        		email:"menino@menino.com",
        		cpf: "9998877765",
        		telefone:"112345879",
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Miller',
        		email:"miller@miller.com",
        		cpf: "12365478910",
        		telefone:"1298654325",
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
        		nome: 'Medeiros',
        		email:"medeiros@medeiros.com",
        		cpf: "1234567749",
        		telefone:"1212121212",
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Michelle',
        		email:"michelle@michelle.com",
        		cpf: "123458875443",
        		telefone:"12345871235",
				createdAt: new Date(),
				updatedAt: new Date()
			}
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Clientes', null, {})
  }
}