var http = require('http');
var fs = require('fs');

// var stream = fs.createReadStream(__dirname + '/readme.txt','utf8');
// stream.on('data',function(chunk){
//     console.log('chunk arrived -------------------------------------------------------------------------------');
//     console.log(chunk);
// });

var stream = fs.createReadStream(__dirname + '/readme.txt','utf8');
var wstream = fs.createWriteStream(__dirname+'/writemeee.txt');
stream.on('data',function(chunk){
    console.log('chunk arrived -------------------------------------------------------------------------------');
    wstream.write(chunk);
});

// var server = http.createServer(function(req,res){
// res.writeHead(200,{'Content-Type':'text/plain'})
// res.end('hey server ur started now ');
// });

// server.listen(3000 ,'192.168.0.119');
// console.log('now listen 3000');
