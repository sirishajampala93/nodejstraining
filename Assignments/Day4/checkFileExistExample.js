
var fs = require("fs");

console.log("Check file exists example starts.");


function doesFileExist(filePath)
{
    var isFileExists;
   // console.log(filePath);
    if (fs.existsSync(filePath)) {
        console.log("File exists");
        isFileExists= true;
      }
      else
      {
        console.log("File does not exists");
        isFileExists = false;
      }
    
  return isFileExists

}

var isFile = doesFileExist ("text3.txt");
//console.log(isFile);
if(isFile == true)
{
console.log("File exists");
}
else
{
console.log("File does not exists");
}