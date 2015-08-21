var stream = require('stream');
var fs = require('fs');

//create a file dump.css
var write = fs.createWriteStream("dump.css");
// Accept stream info and pipe stream into write
process.stdin.pipe(write);