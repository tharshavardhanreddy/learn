// var count =require('./count');
// console.log(count.counter(['harsha', 'vardhan', 'reddy']));

var count = require('./count');
console.log(count.counter(['harsha', 'vardhan', 'reddy']));
console.log((count.add(5,6)));
console.log(count.add(count.pi,5));

var fs = require('fs');
// var read = fs.readFileSync('readme.txt', 'utf8');
// console.log(read);
// fs.writeFileSync('writeme.txt',read);

fs.readFile('readme.txt','utf8',function(err,data){
    console.log(data);
})