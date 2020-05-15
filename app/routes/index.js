module.exports = function (application) {

	// rota para renderização ao carregar a página
	application.get('/', function (req, res) {
		application.app.controllers.index.iniciar(application, req, res);
	});

	// rota para enviar os dados do input do index para o controller do discovery
	application.post('/pesquisar', function (req, res) {
		application.app.controllers.index.pesquisar(application, req, res);
	});
}