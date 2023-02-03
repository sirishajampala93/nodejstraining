console.log("readWriteFileExample starts............")
var fs = require("fs");
fs.readFile("file3.txt",function (err,data)
{
    if(err)
    {
     console.log("Error is =" + err);
    }
    else
    {
fs.writeFile("file5.txt", data.toString(), function(err)
{
    if(err)
    {
    console.log("File write operation is not completed successfully")
    }
    else
    {
        console.log("File write operation is completed successfully");
    }

})
    }
}
)
