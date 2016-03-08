var http = require("http");

function processa(req, res){
	var corpo = 'Sono qui! mi hai chimato da ' + req.url + ' con metodo: ' + req.method + '\n';
	var content_length = corpo.length;
	res.writeHead(200, {'Content-Length': content_length, 'Content-Type': 'text/plain'});
	response.end(corpo)
	}

var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var address = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";

var s = http.createServer(processa);
s.listen(port, address);