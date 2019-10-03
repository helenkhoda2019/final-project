const express = require('express');
// const session = require('express-session');
const path = require('path');
const app = express();
var mongoose = require('mongoose');
var db = require("./models/index");
require('./config/passport');
// var ObjectId = mongoose.Types.ObjectId;

const port = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// If deployed, use the deployed database. Otherwise use the local db.
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/stealtheshow"
// Connect to the Mongo db. 
mongoose.connect(MONGODB_URI);

if (process.env.Node_ENV === "production") {
  app.use(express.static("client/build"));
}


app.use(express.static(path.join(__dirname, 'client/public')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/public', 'intro.html'));
});

app.get('/home', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/public', 'home.html'));
});

app.get('/shoes', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/public', 'shoes.html'));
});

app.get('/shop', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/public', 'shop.html'));
});

app.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/public', 'login.html'));
});

app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/public', 'about.html'));
});

app.get('/plan', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/public', 'plan.html'));
});

app.get('/checkout', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/public', 'checkout.html'));
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

app.get("/api/cart/:id", function (req, res) {
  db.Inventory.findById(req.params.id, function (err, data) {
    if (err) {
      return err
    }
    res.json(data)
  })

});

// POST ROUTE FOR HANDLING RETURN OF ITEMS
app.post("/api/cart/return/:id", function (req, res) {
  db.Inventory.findOneAndUpdate({
    _id: req.params.id
  }, { rented: false }, function (err, data) {
    if (err) {
      return err
    }
    db.User.findByIdAndUpdate(req.body.userId, {$pull: {itemsRented: data._id } }, function(userData){

    })
    res.json(data)
  })
});

// POST ROUTE FOR HANDLING RENTING OF ITEMS
app.post("/api/cart/rent/:id", function (req, res) {
  db.Inventory.findOneAndUpdate({
    _id: req.params.id
  }, { rented: true }, function (err, data) {
    if (err) {
      return err
    }
    // console.log(req.body.userId)
    db.User.findByIdAndUpdate(req.body.userId, {$push: {itemsRented: data } }, function(userData){

    })
    res.json(data)
  })
});

app.get("/api/user/:id", function(req, res){
  db.User.findById(req.params.id, function(err, data) {
    if (err) {
      return err;
    }
    res.json({
      email: data.email,
      itemsRented: data.itemsRented
    })
  })
});

app.get("/api/user/profile/:id", function (req, res) {
  db.User.findById(req.params.id)
    .populate('itemsRented')
    .then(function (dbUser) {
      res.json(dbUser);
    })
    .catch(function (err) {
      res.json(err);
    })
});

app.post("/login", function (req, res) {
  var firstName = req.body.firstName;
  var username = req.body.username;
  var userpassword = req.body.password;
  console.log(username);
  db.User.findOne({
    email: username
  }).then(function (data) {
    if (!data) {
      db.User.create({
        firstName: firstName,
        email: username,
        password: userpassword
      })
      console.log("User Created!")
      res.json({"error": "true"});
    }
    else {
      console.log(data.password, userpassword);
      if (data.password !== userpassword) {
        res.json(
          {
            userID: false,
            msg: "wrong password"
          }
        )
        console.log("Wrong Password!");
      }
      else {
        res.json(
          {
            userID: data._id,
            msg: "",
            error: "false"
          }
        )
        console.log("Correct Password!");
      }
    }
  }).catch(function (err) {
    res.json(err);
  })
})

app.listen(port);