module.exports = function(application){
	application.get('/', function(req, res){
		//Configuração para detectar e pegar em JSON ou TEXT/HTML
		res.format({
			html: function(){
				res.send('Bem vindo ao NODEJS Servidor - Versão TEXT/HTML');
			},
			json: function() {
				//criando uma variável em JSON
				var retornoJSON = {
					body : 'Bem vindo ao NODEJS Servidor - Versão JSON'
				}
				res.json(retornoJSON);
			}
		})
	});

	application.post('/', function(req, res){
		var dadosPagina = req.body;
		res.send(dadosPagina);
	});
}