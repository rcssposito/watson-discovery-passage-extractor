/* importar as configurações do servidor */
var app = require('./config/server');

/* parametrizar a porta de escuta */
app.listen(3000, function () {
	console.log("Servidor na porta : http://localhost:3000");
})