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

app.get('/shoes', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/public', 'shoes.html'));
});

app.get('/handbag', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/public', 'handbag.html'));
});

app.get('/login', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/public', 'login.html'));
});




// routes for dress.html
app.get("/api/dress",function (req,res){
  db.Inventory.find({
    category: 'dress'
  })
  .then(function(dbInventory){
    res.json(dbInventory);
  })
  .catch(function(err){
    res.json(err);
  }) 
 });

 // route for shoes.html
app.get("/api/shoes",function (req,res){
  db.Inventory.find({
     category: 'shoes'
  })
  .then(function(dbInventory){
    res.json(dbInventory);
  })
  .catch(function(err){
    res.json(err);
  }) 
 });

  // route for handbag.html
app.get("/api/handbags",function (req,res){
  db.Inventory.find({
     category: 'bag'
  })
  .then(function(dbInventory){
    res.json(dbInventory);
  })
  .catch(function(err){
    res.json(err);
  }) 
 });






app.listen(Port);