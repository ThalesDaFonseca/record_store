module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Discos', [
			{
        nomeDisco: "A Banda",
        valorDisco: "22,99",
        disponivel: true,
        Artista_Id: 2,
        quantidadeEstoque:5,
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        nomeDisco: "A Bandinha",
        valorDisco: "22,99",
        disponivel: true,
        Artista_Id: 2,
        quantidadeEstoque:2,
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        nomeDisco: "A Bandona",
        valorDisco: "22,99",
        disponivel: true,
        Artista_Id: 2,
        quantidadeEstoque: 3,
        createdAt: new Date(),
        updatedAt: new Date()

      }
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Discos', null, {})
  }
}