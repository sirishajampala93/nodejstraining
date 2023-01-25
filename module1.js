console.log("Hello DXC");
function AddTwoNumbers(number1, number2)
{
   return number1+number2;
}

function SubtractTwoNumbers(number1,number2)
{
    return number1 - number2;
}

var addedCount = AddTwoNumbers(5,6);
var differenceCount = SubtractTwoNumbers(30,20);
console.log("Result =" + addedCount);
console.log("Result of subtraction =" + differenceCount);
console.log("Module1 ends");

module.exports={
    SubtractTwoNumbers : SubtractTwoNumbers,
    AddTwoNumbers : AddTwoNumbers ,
    companyName: "DXC Technology"

}
