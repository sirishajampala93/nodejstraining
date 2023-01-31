var fs= require("fs");
console.log("Copy file steam example starts ............");


var readStream=fs.createReadStream("text3.txt");
var writeStream=fs.createWriteStream("text1.txt");

//console.log("Content of the file text1.txt before copy :" )
try{
//readStream.pipe(writeStream);
fs.copyFile("text3.txt","text1.txt",function(err)
{
    if(err == null)
    {
console.log("File copy operation completed successfully.");
    }
    else
    {
        console.log("File copy operation failed because of the error : " + e);
    }
})
}
catch(e)
{
    console.log("File copy operation failed because of the error : " + e);
}



