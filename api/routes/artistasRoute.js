const {Router} = require("express");
const ArtistaController = require("../controllers/ArtistaController");

const router = Router()

router.get("/artistas", ArtistaController.acessaTodosArtistas)
router.get("/artistas/:id", ArtistaController.acessaArtista)
router.post("/artistas", ArtistaController.criaArtista)
router.put("/artistas/:id", ArtistaController.atualizaArtista)
router.delete("/artistas/:id", ArtistaController.apagaArtista)

module.exports = router

