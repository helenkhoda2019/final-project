const express = require('express');
// const session = require('express-session');
const path = require('path');
const app =express();
var mongoose = require('mongoose');
var db = require("./models");
require('./config/passport');

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

// app.get('/profile', function(req, res) {
//   res.sendFile(path.join(__dirname, 'client/public', 'profile.html'));
// });


app.get("/api/:category",function (req,res){
  db.Inventory.find({
    category: req.params.category
  })
  .then(function(dbInventory){
    res.json(dbInventory);
  })
  .catch(function(err){
    res.json(err);
  }) 
 });

 // route for shoes.html
// app.get("/api/shoes",function (req,res){
//   db.Inventory.find({
//      category: 'shoes'
//   })
//   .then(function(dbInventory){
//     res.json(dbInventory);
//   })
//   .catch(function(err){
//     res.json(err);
//   }) 
//  });

  // route for handbag.html
// app.get("/api/handbags",function (req,res){
//   db.Inventory.find({
//      category: 'bag'
//   })
//   .then(function(dbInventory){
//     res.json(dbInventory);
//   })
//   .catch(function(err){
//     res.json(err);
//   }) 
//  });

app.get("/profile", function (req, res) {
  db.User.findOne({ 
    email: 'test@me.com'
  })
  .populate('itemsRented')
  .then(function(dbUser) {
    res.json(dbUser);
  })
  .catch(function(err) {
    res.json(err);
  })
})
app.post("/login", function (req, res) {
  var dbUser = db.User.findOne({
    
    email: req.body.username
},function(err , data){
  console.log(data);
    if(data && data.password === req.body.password) {
      console.log("if");
            res.json(data); 
    } else {
      res.send ("/")
    }

}
)


  })





app.listen(Port);