const express = require('express');
// const session = require('express-session');
const path = require('path');
const app = express();
var mongoose = require('mongoose');
var db = require("./models/index");
require('./config/passport');
// var ObjectId = mongoose.Types.ObjectId;

const Port = process.env.PORT || 8000;
// const Image =require("./models/giphyModel");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
mongoose.connect("mongodb://localhost/stealtheshow", { useNewUrlParser: true });

if (process.env.Node_ENV === "production") {
  app.use(express.static("client/build"));
}


app.use(express.static(path.join(__dirname, 'client/public')));

app.get('/dress', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/public', 'dress.html'));
});

app.get('/shoes', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/public', 'shoes.html'));
});

app.get('/handbag', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/public', 'handbag.html'));
});

app.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/public', 'login.html'));
});

app.get('/about', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/public', 'about.html'));
});


app.get("/api/:category", function (req, res) {
  db.Inventory.find({
    category: req.params.category
  })
    .then(function (dbInventory) {
      res.json(dbInventory);
    })
    .catch(function (err) {
      res.json(err);
    })
});

<<<<<<< Updated upstream
 app.get("/api/cart/:id",function (req,res){
  db.Inventory.findById(req.params.id, function(err, data){
    if (err) {
      return err
    }
    res.json(data)
  })
   
 });

 // POST ROUTE FOR HANDLING RETURN OF ITEMS
 app.post("/api/cart/return/:id", function(req,res) {
  db.Inventory.findOneAndUpdate({
    _id: req.params.id}, {rented: false}, function(err, data) {
      if(err) {
        return err
      } 
      res.json(data)
    })
 });

 // POST ROUTE FOR HANDLING RENTING OF ITEMS
 app.post("/api/cart/rent/:id", function(req,res) {
  db.Inventory.findOneAndUpdate({
    _id: req.params.id}, {rented: true}, function(err, data) {
      if(err) {
        return err
      } 
      res.json(data)
    })
 });

=======
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
>>>>>>> Stashed changes

app.get("/profile", function (req, res) {
  db.User.find({
    email: 'test@me.com'
  })
    .populate('itemsRented')
    .then(function (dbUser) {
      res.json(dbUser);
    })
    .catch(function (err) {
      res.json(err);
    })
})
app.post("/api/login", function (req, res) {
  var username = req.body.username;
  var userpassword = req.body.password;
  console.log(username)
  db.User.findOne({
    email: username
  }), function (err, data) {
    if (err) {
      console.log("no user found");
    } else {
      console.log(data);
    };

    // if (data && data.password === req.body.password) {
    //   console.log("if");
    //   res.json(data);
    // } else {
    //   res.send("/")
    // }

  }
  


})





app.listen(Port);