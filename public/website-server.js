var fs = require("fs");
var http = require("http");
var path = require("path");
var https = require("https");
var os = require("os");
var network_int = os.networkInterfaces();

var privatekey = fs.readFileSync("./../certificates/key.pem",'utf-8');
var certificate = fs.readFileSync("./../certificate/cert.pem",'utf-8');

var credentials = {key:privatekey, cert: certificate};
var express = require("express");
var app = express();

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials,app);

Object.keys(network_init).forEach(function(ifname){
	var alias = 0;
	network_init[ifname].forEach(fucntion(iface){
		if('IPV4' !== iface.family || iface.internal !== false)
		{
			return;
		}
		console.log("Welcome to the chat room \n Created By: Akshat & Mudit-'The GOD'\n");
		console.log(" Test the chat interface from the this device at :","https://localhost:8443");
		console.log("\n\nAnd access the chat sandbox from another device through LAN using any of the IPS");
        console.log("Important: Node.js needs to accept inbound connections through the Host Firewall");

        if(alias >= 1)
        {
        	console.log("Multiple IPV$ address found..");
        	console.log(ifname+':'+alias, "https://"+iface.address+":8443");
        }
        else
        {	console.log(ifname,"https://"+iface.address+":8443");

        }
        alias++;
	});

});  

var LANAccess = "0.0.0.0";
httpServer.listen(8080,LANAccess);
httpsServer.listen(8443,LANAccess);

app.get('/',function(req,res){
	res.sendFile(path.join(__dirname+'index.html'));
});

app.use('/resources',express.static('./source'));