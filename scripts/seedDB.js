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
    firstName: "Chloe",
    email: "test@me.com",
    password: "testing"
  }
];

const inventorySeed = [
  {
    src: "https://pc-ap.rtrcdn.com/productimages/front/270x/fe/BM521.jpg",
    alt: "Metallic Blue Gown",
    description: "Metallic Blue Gown",
    designer: "Badgley Mischka",
    retailPrice: 795,
    rented: false,
    category: "dress"
  },
  {
    src: "https://pc-ap.rtrcdn.com/productimages/front/270x/12/AMR22.jpg",
    alt: "Eva Dress",
    description: "Eva Dress",
    designer: "Amur",
    retailPrice: 448,
    rented: false,
    category: "dress"
  },
  {
    src: "https://pc-ap.rtrcdn.com/productimages/front/270x/04/MNL245.jpg",
    alt: "Sequin Faux Wrap Dress",
    description: "Sequin Faux Wrap Dress",
    designer: "Monique Lhuillier",
    retailPrice: 495,
    rented: false,
    category: "dress"
  },
  {
    src: "https://pc-ap.rtrcdn.com/productimages/front/270x/6f/PK335.jpg",
    alt: "Roxanna High Low Gown",
    description: "Roxanna High Low Gown",
    designer: "Park",
    retailPrice: 388,
    rented: false,
    category: "dress"
  },
  {
    src: "https://pc-ap.rtrcdn.com/productimages/front/270x/0c/SLN50.jpg",
    alt: "Kerama Gown",
    description: "Kerama Gown",
    designer: "Solace London",
    retailPrice: 585,
    rented: false,
    category: "dress"
  },
  {
    src: "https://pc-ap.rtrcdn.com/productimages/front/270x/57/MNL253.jpg",
    alt: "Black Cut Out Gown",
    description: "Black Cut Out Gown",
    designer: "Monique Lhuillier",
    retailPrice: 495,
    rented: false,
    category: "dress"
  },
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
    src: "//images.neimanmarcus.com/ca/2/product_assets/X/4/T/Z/9/NMX4TZ9_ma.jpg",
    alt: "Satin Wing Jeweled Sandals",
    description: "Satin Wing Jeweled Sandals",
    designer: "Giuseppe Zanotti",
    retailPrice: 2125,
    rented: false,
    category: "shoes"
  },
  {
    src: "//images.neimanmarcus.com/ca/5/product_assets/X/4/9/Y/L/NMX49YL_ma.jpg",
    alt: "Metrolisse Over-The-Knee Red Sole Boots",
    description: "Metrolisse Over-The-Knee Red Sole Boots",
    designer: "Christian Louboutin",
    retailPrice: 2995,
    rented: false,
    category: "shoes"
  },
  {
    src: "//images.neimanmarcus.com/ca/4/product_assets/X/4/9/Y/0/NMX49Y0_ma.jpg",
    alt: "New Very Riche 120 Peep-Toe Red Sole Pumps",
    description: "New Very Riche 120 Peep-Toe Red Sole Pumps",
    designer: "Christian Louboutin",
    retailPrice: 3595,
    rented: false,
    category: "shoes"
  },
  {
    src: "//images.neimanmarcus.com/ca/1/product_assets/X/4/L/V/9/NMX4LV9_ma.jpg",
    alt: "Chiara Embroidered Butterfly Sandals",
    description: "Chiara Embroidered Butterfly Sandals",
    designer: "Sophia Webster",
    retailPrice: 795,
    rented: false,
    category: "shoes"
  },
  {
    src: "//images.neimanmarcus.com/ca/2/product_assets/X/4/P/4/4/NMX4P44_ma.jpg",
    alt: "Cassandra Metallic YSL Sandals",
    description: "Cassandra Metallic YSL Sandals",
    designer: "Saint Laurent",
    retailPrice: 1195,
    rented: false,
    category: "shoes"
  },
  {
    src: "//images.neimanmarcus.com/ca/6/product_assets/X/4/B/W/X/NMX4BWX_ma.jpg",
    alt: "Ilcepoze 100 See-Through Red Sole Pumps with Butterfly",
    description: "Ilcepoze 100 See-Through Red Sole Pumps with Butterfly",
    designer: "Christian Louboutin",
    retailPrice: 925,
    rented: false,
    category: "shoes"
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
    src: "//neimanmarcus.scene7.com/is/image/NeimanMarcus/NMX3P4L_CE_m?&wid=304&height=380",
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
    src: "//neimanmarcus.scene7.com/is/image/NeimanMarcus/NMX4ELS_01_m?&wid=304&height=380",
    alt: "Quintana Crystal Pump",
    description: "Quintana Crystal Pump",
    designer: "Badgley Mischka Collection",
    retailPrice: 265,
    rented: false,
    category: "shoes"
  },
  {
    src: "https://neimanmarcus.scene7.com/is/image/NeimanMarcus/NMX4PDB_66_m?&wid=400&height=500",
    alt: "Scarlet Slip-On Sandal",
    description: "Scarlet Slip-On Sandal",
    designer: "Gucci",
    retailPrice: 590,
    rented: false,
    category: "shoes"
  },
  {
    src: "https://n.nordstrommedia.com/id/sr3/36ad9716-d5dd-434b-bf14-925a253c9c45.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
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