var fs= require("fs");
console.log ("Day3 assignment - Task1 starts");
console.log("-------------------------------");
var fileNamesArray = ["Day3Assignment_File1.txt","Day3Assignment_File2.txt","Day3Assignment_File3.txt"];

for (var i=0;i<fileNamesArray.length;i++)
{
fs.readFile(fileNamesArray[i], function(err,data)
{
    data = data.toString()+"\r\n";
    if(err)
    {
     console.log("Error is =" + err);
    }
    else
    {
        console.log("file read operation is completed successfully");
        fs.appendFile("Day3Assignment_File4", data, function(err)
        {
         if(err)
         {
            console.log("Files write operation is not completed successfully")
         }
         else
         {
            console.log("Files write operation is completed successfully");
         }

        })

    }
})
}

