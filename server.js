const express = require('express');
const path = require('path');
const app =express();
var mongoose = require('mongoose');
var db = require("./models")
const Port = process.env.PORT || 8000;
// const Image =require("./models/giphyModel");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
mongoose.connect("mongodb://localhost/stealtheshow",{useNewUrlParser:true});

if (process.env.Node_ENV === "production"){
  app.use(express.static("client/build"));
}


app.use(express.static(path.join(__dirname, 'client/public')));

app.get('/dress', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/public', 'dress.html'));
});



// routes for dress.html
app.get("/api/dress",function (req,res){
  db.Inventory.find({})
  .then(function(dbInventory){
    res.json(dbInventory);
  })
  .catch(function(err){
    res.json(err);
  })
    
  });


app.listen(Port);