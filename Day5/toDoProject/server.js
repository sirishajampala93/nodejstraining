var fs= require("fs");
var http = require("http");
var path = require("path");
var url=require("url");
var qs=require("querystring");
const port = 3000;
var postArr=[];

var server = http.createServer((request, response) => {
   // response.end("Response from the server");
    if(request.url == "/notes")
    {
        if(request.method == "DELETE")
        {
            
        }
        if(request.method == "PATCH")
        {
            //update the records


        }
        if(request.method == "GET")
        {
            //get the details from server. 
        response.end(JSON.stringify(postArr));
        return;
        }
        else if(request.method == "POST")
        {
            var newPosts ="";
            request.on("data",(chunks)=>
            {
                newPosts+= chunks;
            })
            request.on("end",(chunks)=>
            {
                var newPostsObj= JSON.parse(newPosts);
                postArr.push(newPostsObj);
                
                response.end("New post created");
               
            })
            request.on("error",(err)=>{
                console.log("Error in post request to /posts" + err);
                response.statusCode= 401;
                response.end("Insertion Failed");
             
            })
            return;
        }
    

    
    }
    

})

server.listen(port, () => {
    console.log(`Server has started at number : ${port}`)
})