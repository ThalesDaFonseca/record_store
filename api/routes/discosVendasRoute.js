const {Router} = require("express");
const DiscosVendasController = require("../controllers/DiscosVendasController");

const router = Router()

router.get("/discosVendas", DiscosVendasController.acessaTodosDiscosVendas)
router.get("/discosVendas/:id", DiscosVendasController.acessaDiscosVendas)
router.post("/discosVendas", DiscosVendasController.adicionaDiscoVenda)
router.put("/discosVendas/:id", DiscosVendasController.atualizaDiscoVenda)
router.delete("/discosVendas/:id", DiscosVendasController.apagaDiscoVenda)

module.exports = router