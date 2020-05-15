module.exports.iniciar = function (application, req, res) {
    // renderização do index
    res.render('index');
}

module.exports.pesquisar = function (application, req, res) {
    // solicita que o conteúdo do imput texto seja obtido
    var data = req.body.texto
    // direciona o conteúdo da variável para a rota discovery
    res.redirect('discovery?data=' + data)
}