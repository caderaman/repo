var http = require("http");
var util = require("util");
var clients = [];
function processa(request, response){
	console.log("Incoming Request: " + request.method + " " + request.url);
	var url_length = request.url.length;
	var corpo = 'Sono qui! mi hai chimato!\n';
	var content_length = corpo.length;
	var n = clients.length ;
	response.writeHead(200, {'Content-Length': content_length, 'Content-Type': 'text/plain'});
	function returnResp(){
		for (var j = 0 ; j < clients.length ; j++) {
		for (var i = 0 ; i < clients.length ; i++) {
			if (clients[i] == clients[j]) console.log("Stream equivalenti: " + i + " - " + j) ;
		}}
		response.end(corpo)
	};
	if (n > 3) {
		s.removeAllListeners('connection') ;
		response.write("Numero massimo di connessioni superato") ;
		console.log('Err: Numero massimo di connessioni superato!') ;
	}
	else {returnResp();}
}

var s = http.createServer(processa);
s.listen(8383);
s.on('connection', function (stream) {
clients.push(stream);
console.log('--> connessione attiva!') ;
//console.log(util.inspect(stream)) ;
});