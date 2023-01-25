console.log("Module4 starts")
var {f1,f2} = require("./module3");

var addCountModule4 = f1(10,20,20);
console.log("add count in module4 is " + addCountModule4);

var subCountModule4=f2(10,10);
if( subCountModule4 >0)
{
    console.log("The value is greater than zero");
}
else
{
    console.log("The value is less than or equal zero");
}