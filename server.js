var http = require('http');

var server = http.createServer(function(req,res){
res.writehead(200,{'Content-Type':'text/plain'})
res.end('hey server ur started now ');
});

server.listen(3000 ,'192.168.0.119');
console.log('now listen 3000');