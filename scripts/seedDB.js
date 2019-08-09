const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Inventory collection and inserts the items below

mongoose.connect(
  process.env.MONGODB_URI ||
  // need to change this:
  "mongodb://localhost/stealtheshow"
);

const inventorySeed = [
  {
    src: "https://pc-ap.rtrcdn.com/productimages/front/270x/c3/REF14.jpg",
    alt: "Nikita dress",
    description: "Nikita dress",
    designer: "Reformation",
    retailPrice: 248,
    rented: false
  },
  {
    src: "https://pc-ap.rtrcdn.com/productimages/front/270x/26/HNY9.jpg",
    alt: "Goldie dress",
    description: "Goldie dress",
    designer: "Haney",
    retailPrice: 890,
    rented: false
  },
  {
    src: "https://pc-ap.rtrcdn.com/productimages/front/270x/c3/REF14.jpg",
    alt: "Nikita dress",
    description: "Nikita dress",
    designer: "Reformation",
    retailPrice: 248,
    rented: false
  }

];

db.Inventory
  .remove({})
  .then(() => db.Inventory.collection.insertMany(inventorySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });