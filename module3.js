console.log("Module3 starts");
exports.f1 =function (num1, num2,num3)
{
  return num1+num2+num3;
}

exports.f2= function (num1,num2)
{
    var subtractCountModule3 =num1 - num2;
    console.log("Total count of difference is "+ subtractCountModule3);
    return subtractCountModule3;
}

