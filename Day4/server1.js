var http = require("http");//core inbuilt module
var fs=require("fs");
const port = 3000;

var server = http.createServer((request, response) => {
    // handle specific methods and specific requests for different urls
    console.log("Request object method", request.method);
    console.log("Request object url", request.url);
    if (request.method == "GET") {
        if (request.url == "/") {
            response.write("This is the first chunk of response");
            response.write("This is the second chunk of response");
            response.end("tHis is the last chunk of response");
            return;
        }
        if(request.url == "/login")
        {
            // send login.html as response
            //readFileSync -- no
            // read -- No -- partial read of file
            //readFile
            /* fs.readFile("login.html",(err,contentOfFile)=>{
                if(err)
                {
                    response.setHeader('Content-type',"text/plain");
                    response.statusCode=500;
                    response.end("Error reading the file");
                }
                else
                {
                    response.end(contentOfFile);
                }
            }) */
            // createReadStream
            var readStreamRef=fs.createReadStream("login.html");
            /* readStreamRef.on("data",(chunk)=>{
                response.write(chunk);
            })
            readStreamRef.on("end",(chunk)=>{
                response.end(chunk);
            })
            readStreamRef.on("error",(err)=>{
                    response.setHeader('Content-type',"text/plain");
                    response.statusCode=500;
                    response.end("Error reading the file");
            }) */
            readStreamRef.pipe(response);
            
            return;
        }

    }
    response.end("Request received successfully from client and response sent successfully");

});

server.listen(port, () => {
    console.log(`Server is running at localhost with port number : ${port}`)
})
// npm install nodemon -g
// To run a file : nodemon server1.js

/* 
Finish all the previous assignments and push it to git
1. Create a module which will take in a file and create a copy of the file
2. Clone a directory and its child files
cloneDirectory(path to a directory); return me the cloned directory name
3. Function to Check for existence of a file
doesFileExist(pathtothefile); return a boolean value
*/