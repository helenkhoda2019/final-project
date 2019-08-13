const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Inventory collection and inserts the items below

mongoose.connect(
  process.env.MONGODB_URI ||
  // need to change this:
  "mongodb://localhost/stealtheshow"
);

const userSeed = [
  {
    email: "test@me.com",
    password: "password"
  }
];

const inventorySeed = [
  {
    src: "https://pc-ap.rtrcdn.com/productimages/front/270x/c3/REF14.jpg",
    alt: "Nikita dress",
    description: "Nikita dress",
    designer: "Reformation",
    retailPrice: 248,
    rented: false,
    category: "dress"
  },
  {
    src: "https://pc-ap.rtrcdn.com/productimages/front/270x/26/HNY9.jpg",
    alt: "Goldie dress",
    description: "Goldie dress",
    designer: "Haney",
    retailPrice: 890,
    rented: false,
    category: "dress"
  },
  {
    src: "https://pc-ap.rtrcdn.com/productimages/front/1080x/c3/JG135.jpg",
    alt: "Rita Dress",
    description: "Rita Dress",
    designer: "Jay Godfrey",
    retailPrice: 299,
    rented: false,
    category: "dress"
  },
  {
    src: "https://pc-ap.rtrcdn.com/productimages/front/1080x/23/JSK26.jpg",
    alt: "Spackle Print Asymmetric Ruffle Dress",
    description: "Spackle Print Asymmetric Ruffle Dress",
    designer: "Jonathan Simkhai",
    retailPrice: 595,
    rented: false,
    category: "dress"
  },
  {
    src: "https://pc-ap.rtrcdn.com/productimages/front/270x/c1/DTP27.jpg",
    alt: "Marcella Dress",
    description: "Marcella Dress",
    designer: "Dress The Population",
    retailPrice: 260,
    rented: false,
    category: "dress"
  },
  {
    src: "https://pc-ap.rtrcdn.com/productimages/front/270x/87/DTP6.jpg",
    alt: "White Carlene Dress",
    description: "White Carlene Dress",
    designer: "Dress The Population",
    retailPrice: 295,
    rented: false,
    category: "dress"
  },
  {
    src: "https://pc-ap.rtrcdn.com/productimages/front/183x/e0/MGEHNB15.jpg",
    alt: "Black Doli Cluth",
    description: "Black Doli Clutch",
    designer: "Mackage Handbags",
    retailPrice: 250,
    rented: false,
    category: "bag"
  },
  {
    src: "https://pc-ap.rtrcdn.com/productimages/front/183x/7b/CLEHNB21.jpg",
    alt: "Clarissa Wicker Bag",
    description: "Clarissa Wicker Bag",
    designer: "Cleobella Handbags",
    retailPrice: 138,
    rented: false,
    category: "bag"
  },
  {
    src: "https://pc-ap.rtrcdn.com/productimages/front/183x/6a/MGEHNB14.jpg",
    alt: "Lilac Amour Crossbody",
    description: "Lilac Amour Crossbody",
    designer: "Mackage Handbags",
    retailPrice: 350,
    rented: false,
    category: "bag"
  },
  {
    src: "https://pc-ap.rtrcdn.com/productimages/front/183x/80/COAHNB20.jpg",
    alt: "Riley Top Handle 22 Bag",
    description: "Riley Top Handle 22 Bag",
    designer: "Coach Handbags",
    retailPrice: 550,
    rented: false,
    category: "bag"
  },
  {
    src: "https://pc-ap.rtrcdn.com/productimages/front/183x/0c/CLEHNB10.jpg",
    alt: "Saffron Mexicana Cluth",
    description: "Saffron Mexicana Clutch",
    designer: "Cleobella Handbags",
    retailPrice: 207,
    rented: false,
    category: "bag"
  },
  {
    src: "https://pc-ap.rtrcdn.com/productimages/front/183x/dd/MLAHNB12.jpg",
    alt: "Metallic Reptile Clutch",
    description: "Metallic Reptile Clutch",
    designer: "Milly Handbags",
    retailPrice: 255,
    rented: false,
    category: "bag"
  },
  {
    src: "https://n.nordstrommedia.com/id/sr3/64e67a24-b4e2-43b9-a5e6-1d19132f16db.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2&quality=60",
    alt: "So Kate Point Toe Pump",
    description: "So Kate Pointy Toe Pump",
    designer: "Christian Louboutin",
    retailPrice: 695,
    rented: false,
    category: "shoes"
  },
  {
    src: "https://n.nordstrommedia.com/id/sr3/146b6b16-f7b4-4893-bcb4-5dc91d52df73.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=60&h=90&dpr=1.5&quality=65",
    alt: "Rockstud T-Strap Pump",
    description: "Rockstud T-Strap Pump",
    designer: "Valentino Garavani",
    retailPrice: 995,
    rented: false,
    category: "shoes"
  },
  {
    src: "https://n.nordstrommedia.com/id/sr3/68049b82-4d91-4ebe-8bab-d05a04f2f3f6.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2&quality=60",
    alt: "Hangisi Jewel Pump",
    description: "Hangisi Jewel Pump",
    designer: "Manolo Blahnik",
    retailPrice: 995,
    rented: false,
    category: "shoes"
  },
  {
    src: "https://n.nordstrommedia.com/id/sr3/21b75d3c-7070-4617-9ec6-f2210c897c25.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=60&h=90&dpr=3&quality=50",
    alt: "Quintana Crystal Pump",
    description: "Quintana Crystal Pump",
    designer: "Badgley Mischka Collection",
    retailPrice: 265,
    rented: false,
    category: "shoes"
  },
  {
    src: "https://n.nordstrommedia.com/id/sr3/9d708d44-cb75-4d10-bb03-930ca523eed4.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=60&h=90&dpr=2&quality=60",
    alt: "Scarlet Slip-On Sandal",
    description: "Scarlet Slip-On Sandal",
    designer: "Gucci",
    retailPrice: 590,
    rented: false,
    category: "shoes"
  },
  {
    src: "https://n.nordstrommedia.com/id/sr3/36ad9716-d5dd-434b-bf14-925a253c9c45.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=60&h=90&dpr=2&quality=60",
    alt: "Aveline Bow Ankle Strap Sandal",
    description: "Aveline Bow Ankle Strap Sandal",
    designer: "Jimmy Choo",
    retailPrice: 975,
    rented: false,
    category: "shoes"
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

  db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });