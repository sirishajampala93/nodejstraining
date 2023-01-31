var fs=require("fs");

var readStreamRef=fs.createReadStream("text3.txt");
var writeStreamRef=fs.createWriteStream("text7.txt");

readStreamRef.pipe(writeStreamRef);
