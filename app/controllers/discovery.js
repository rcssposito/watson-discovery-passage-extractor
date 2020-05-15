module.exports.extrair = function (application, req, res) {
    // importação das configurações de conexão do discovery
    const discovery = require('../../config/discovery')

    // requiusição do conteúdo da variável enviada através do método pesquisar
    var text = req.query.data;

    // parâmetros de pesquisa a fim de obter apenas as passagens mais relevantes
    const queryParams = {
        environmentId: process.env.env_id,
        collectionId: process.env.col_id,
        deduplicate: false,
        passagesCount: 1,
        passagesCharacters: 400,
        passages: true,
        _return: 'passage_text',
        naturalLanguageQuery: text,
    };

    // funcção de chamada para enviar os parâmetros de busca e obter um JSon de resposta
    discovery.query(queryParams)
        .then(queryResponse => {

            //  gravação do JSon na variável l,
            //  onde é solicitado que apenas o item 'passage_text' seja retornado, 
            //  pois é ele que contem o texto da passagem textual que nos interessa
            var l = queryResponse.result.passages.map(item => item.passage_text);

            // conversão da variável l para uma string, removendo os colchetes []
            data = JSON.stringify(l, null, 2).replace(/\[|\]|"/g, "")

            // renderização da variável data com a string para a página index
            res.render('index', {
                data
            })

            console.log('\n Arquivo Modular: \n' + data);
        })
        .catch(err => {
            console.log('error:', err);
        });

}