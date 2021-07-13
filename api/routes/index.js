const bodyParser = require("body-parser");
const artistas = require("./artistasRoute");
const clientes = require("./clientesRoute");
const discos = require("./discosRoutes");
const vendas = require("./vendasRoutes");
const discosVendas = require("./discosVendasRoute")


module.exports = app => {
    app.use(bodyParser.json())
    app.use(artistas)
    app.use(clientes)
    app.use(discos)
    app.use(vendas)
    app.use(discosVendas)
}