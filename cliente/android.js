var http = require('http');
var buffer_corpo_response = [];
var passagemPorJSON = {
    host: 'localhost',
    port: 80,
    path: '/',
    headers: {
        //'Accept':'text/html'   - Para TEXT/HTML
        'Accept': 'application/json'
    }
}

http.get('http://localhost', function(res){
// Formatação para pegar do BUFFER o puro text/html
    // res.on('data', function(parteDaPaginaCarregada){
    //     buffer_corpo_response.push(parteDaPaginaCarregada);
    //  })
// Formatação para pegar do BUFFER para o JSON
    res.on(passagemPorJSON, function(parteDaPaginaCarregada) {
        buffer_corpo_response.push(parteDaPaginaCarregada);
    })
    res.on('end', function(){
       var capturaResponseBuffer = Buffer.concat(buffer_corpo_response).toString();
       console.log(capturaResponseBuffer);
    })    
});