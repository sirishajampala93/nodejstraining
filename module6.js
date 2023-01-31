console.log("Module 6 starts .............");
function createMaskOnPhoneNumber(inputPhoneNumber)
{
    var maskedDigits;
    if(inputPhoneNumber !=null)
    {
    const endDigits = inputPhoneNumber.substring(inputPhoneNumber.length - 3);
    const startdigits = inputPhoneNumber.substring(0,3);
    maskedDigits = `${startdigits}****${endDigits}`;
    }
    return maskedDigits ;
}

var maskedNumber = createMaskOnPhoneNumber("1234567890");
console.log("The masked number is "+ maskedNumber);

