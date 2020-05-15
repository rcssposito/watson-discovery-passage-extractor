// importação da lib dotenv para tratar a extensão .env
require('dotenv').config()

// importação da lib do discovery 
const DiscoveryV1 = require('ibm-watson/discovery/v1');

// importação da lib de autenticação
const {
    IamAuthenticator
} = require('ibm-watson/auth');

// método de conexão de API do serviço
const discovery = new DiscoveryV1({
    version: '2018-12-03',
    authenticator: new IamAuthenticator({
        apikey: process.env.discovery_api,
    }),
    url: process.env.discovery_url,
});

// export da conexão
module.exports = discovery