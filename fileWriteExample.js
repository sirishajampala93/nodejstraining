var fs= require("fs");

fs.writeFile("file7.txt","This is the content of file7",function(err)
{
    console.log("Write operation completed");
    if(err)
    {
console.log("file write operation failed" +err);
    }
    else
    {
console.log("file write operation completed successfully");
    }
})