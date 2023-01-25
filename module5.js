console.log("Module5 Starts.........");
function ReturnSquaresOfArray(inputArray)
{
    var retArray =[];
    
    for(var i=0, len = inputArray.length;i<len ;i++)
    {
        retArray.push(inputArray[i] * inputArray[i]);

    }
    return retArray;
}

var arr=[10,20,30,40,50];
var outputArray = ReturnSquaresOfArray(arr);

console.log("The array numbers are " + outputArray);
