var http = require('http');

var passagemPorJSON = {
    hostname: 'localhost',
    port: 80,
    path: '/teste',
    method: 'get',
    headers: {
        //'Accept':'text/html'   - Para TEXT/HTML
        'Accept': 'application/json',
        'Content-type': 'application/json'
    }
}

var buffer_corpo_response = [];

/*
var json = {nome : 'José'};
var jsonToString = JSON.stringify(json);
*/

var reqHTTP = http.get(passagemPorJSON, function(res){
// Formatação para pegar do BUFFER o puro text/html
    // res.on('data', function(parteDaPaginaCarregada){
    //     buffer_corpo_response.push(parteDaPaginaCarregada);
    //  })
// Formatação para pegar do BUFFER para o JSON
    res.on('data', function(parteDaPaginaCarregada) {
        buffer_corpo_response.push(parteDaPaginaCarregada);
    })
    res.on('end', function(){
       var capturaResponseBuffer = Buffer.concat(buffer_corpo_response).toString();
       console.log(capturaResponseBuffer);
       console.log(res.statusCode);
    })
});

//reqHTTP.write(jsonToString);
reqHTTP.end();