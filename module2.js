

console.log("Module2 starts");
//const module1 = require("./module1");
var obj = require('./module1');


var n1= 40 ; var n2=50;

var addedCountInModule2=obj.AddTwoNumbers(n1,n2);
var differencecountInModule2=obj.SubtractTwoNumbers(n1,n2);

console.log(`Added count of ${n1} and ${n2} is ${addedCountInModule2}`);
console.log(`count difference of ${n1} and ${n2} is ${differencecountInModule2}`);
console.log("Company Name is " + obj.companyName);
console.log("module2 ends here");

//var obj = require('./module1');
