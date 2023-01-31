const fs= require("fs"); //inbuild module fs
//execute the inbuild core fs module 

fs.readFile("./module7.js",function(err,data)
{
console.log("file read option complete" + data.toString())
if(err)
{
    console.log("Error while reading the file" + err);

}
else 
{
console.log("Successfully read the file")
}
})


