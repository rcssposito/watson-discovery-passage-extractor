module.exports = function (application) {
	// rota para receber e tratar os dados recebidos pelo input do index e redirecionados pelo método pesquisar
	application.get('/discovery', function (req, res) {
		application.app.controllers.discovery.extrair(application, req, res);
	});
}