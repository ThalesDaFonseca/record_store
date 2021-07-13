const Express = require('express');
const routes = require("./routes");

const app = Express();
const port = 3000;

routes(app)

app.listen(port, () => console.log(`O servidor roda na na porta ${port}`));

module.exports = app;