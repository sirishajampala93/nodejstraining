const express=require("express");
const path=require("path");

const port=3000;
var empArr = [{ empId: 101, empName: "Asha", salary: 1001, deptId: "D1" },
{ empId: 102, empName: "Gaurav", salary: 2000, deptId: "D1" },
{ empId: 103, empName: "Karan", salary: 2000, deptId: "D2" },
{ empId: 104, empName: "Kishan", salary: 3000, deptId: "D1" },
{ empId: 105, empName: "Keshav", salary: 3500, deptId: "D2" },
{ empId: 106, empName: "Pran", salary: 4000, deptId: "D3" },
{ empId: 107, empName: "Saurav", salary: 3800, deptId: "D3" }]

var app=express();

app.get("/employees",(request,response)=>{
    // return an empArr
    // implicitly set the content-type 
    // no stringify required for sending json data
    response.send(empArr);
})

app.get("/login",(request,response)=>{
    var filePath=path.join(__dirname,"public","login.html");
    response.sendFile(filePath);

})

app.get("/images",(request,response)=>{
    var filePath=path.join(__dirname,"public","flower.jpg");
    response.sendFile(filePath);
})

app.all("/",(request,response)=>{
    response.send("Response from the server");
})


console.log("Express example");
app.listen(port,()=>{
    console.log(`Server started at port : ${port}`);
})
