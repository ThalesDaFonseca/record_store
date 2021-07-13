const {Router} = require("express");
const VendasController = require("../controllers/vendasController");

const router = Router()

router.get("/vendas", VendasController.acessaTodasvendas)
router.get("/vendas/:id", VendasController.acessaVenda)
router.post("/vendas", VendasController.criaVenda)
router.put("/vendas/:id", VendasController.atualizaVenda)
router.delete("/vendas/:id", VendasController.apagaVenda)

module.exports = router

