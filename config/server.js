// importação o módulo do express
var express = require('express');

// importação o módulo do consign
var consign = require('consign');

// importação o módulo do body-parser
var bodyParser = require('body-parser');

// iniciar objeto do express
var app = express();

// setar as variáveis ' view engine' e 'views' do express
app.set('view engine', 'ejs');
app.set('views', './app/views');

// configurar o middleware body-parser
app.use(bodyParser.urlencoded({
    extended: true
}));

// efetua o autoload das rotas, models e controllers para o objeto app
consign()
    .include('app/routes')
    .then('app/controllers')
    .then('config/discovery.js')
    .into(app)

// exportar objeto app
module.exports = app;