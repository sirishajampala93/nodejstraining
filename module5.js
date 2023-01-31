console.log("Module5 Starts.........");
function returnSquaresOfArray(inputArray)
{
    var retArray =[];
    if(inputArray != null)
    {
    for(var i=0, len = inputArray.length;i<len ;i++)
    {
        retArray.push(inputArray[i] * inputArray[i]);

    }
    }
    else 
    {
        retArray = "null";
    }
 
    return retArray;
}

var arr=[10,20,30,40,50];
var outputArray = returnSquaresOfArray(arr);

console.log("The square array numbers are " + outputArray);
