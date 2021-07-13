const {Router} = require("express");
const ClienteControler = require("../controllers/ClienteControler");

const router = Router()

router.get("/clientes", ClienteControler.acessaTodosClientes)
router.get("/clientes/:id", ClienteControler.acessaCliente)
router.post("/clientes", ClienteControler.criaCliente)
router.put("/clientes/:id", ClienteControler.atualizaCliente)
router.delete("/clientes/:id", ClienteControler.apagaCliente)

module.exports = router