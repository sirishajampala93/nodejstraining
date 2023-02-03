const express=require("express");
const bodyParser=require("body-parser");
const morgan=require("morgan");
const port=3000;

console.log("Day6 Assignment Morgan Examples starts .................");

var app=express();

app.use(morgan('combined'));

app.get('/', function (req, res) {
    res.send('Hello, This is day 6 assignment');
  })
 
app.use(morgan('tiny'));
app.get('/students',function(req,res)
{

  res.send('Hello, This students end point GET request');

}  )

morgan('combined', {
  skip: function (req, res) { return res.statusCode < 400 }
})

app.get('/student',function(req,res)
{
  res.send('Hello, This student end point GET request');
} )

app.listen(port,()=>{
    console.log(`Server started at port : ${port}`);
})




