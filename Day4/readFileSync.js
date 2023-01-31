var fs=require("fs");

try
{
    var data=fs.readFileSync("text1.txt");
    console.log("Data read",data.toString());
    fs.writeFileSync("text2.txt",data.toString(),{flag:"a"})
}
catch(e)
{
    console.log("File not found",e);
}