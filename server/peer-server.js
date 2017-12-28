var fs = require("fs");
var peerServer = require("peer").peerServer;

var server = peerServer({
	port:9000,
	path:'/peerjs',
	ssl: {
		key: fs.readFileSync('./../certificates/key.pem','utf8'),
		cert: fs.readFileSync('./../certificates/key.pem','utf8')
	}
});