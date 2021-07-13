const {Router} = require("express");
const DiscosController = require("../controllers/DiscosControllers");

const router = Router()

router.get("/discos", DiscosController.acessaTodosDiscos)
router.get("/discos/:id", DiscosController.acessaDiscos)
router.post("/discos", DiscosController.adicionaDisco)
router.put("/discos/:id", DiscosController.atualizaDisco)
router.delete("/discos/:id", DiscosController.apagaDisco)

module.exports = router