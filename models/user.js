var mongoose = require("mongoose");
// const crypto = require('crypto');
// const jwt = require('jsonwebtoken');

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var UserSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required:true
  },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  // `password` is a required field and throws a custom error message if not supplied
  // `password` uses a custom validation function to only accept values 6 characters or more
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password should be longer."
    ]
  },
// will be an array of inventory id's
  itemsRented: [{
      type: Schema.Types.ObjectId,
      ref: "Inventory"
  }],
  userCreated: {
    type: Date,
    default: Date.now
  }
});

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("users", UserSchema);

// Export the User model
module.exports = User;