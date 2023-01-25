console.log("Module 6 starts .............");
function createMaskOnPhoneNumber(inputPhoneNumber)
{
    var maskedDigits;
    const endDigits = inputPhoneNumber.substring(7,10);
    const startdigits = inputPhoneNumber.substring(0,3);
    maskedDigits = `${startdigits}****${endDigits}`;
    return maskedDigits ;
}

var maskedNumber = createMaskOnPhoneNumber("1234567890");
console.log("The masked number is "+ maskedNumber);

