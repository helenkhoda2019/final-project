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


app.use(express.static(path.join(__dirname, 'build')));

// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });


// routes for 

app.listen(Port);