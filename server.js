const express = require('express');
const path = require('path');
const app =express();
var mongoose = require('mongoose');
const Port = process.env.PORT || 8000;
const Image =require("./models/giphyModel");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
mongoose.connect("mongodb://localhost/giphy",{useNewUrlParser:true});

if (process.env.Node_ENV === "production"){
  app.use(express.static("clinet/build"));
}

// connection to the image 
 app.post("/api/add_image,",function(res,res){
   console.log(req.body);
   Image.create(req.body)
   .then(function(data){
     res.jason(data)
   }).catch(function(err){
     res.statusCode(500)
   });
 });

app.use(express.static(path.join(__dirname, 'build')));

// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.listen(Port);