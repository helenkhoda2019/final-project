var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InventorySchema = new Schema({
    // Images start ***********
    src: {
        type:String,
        trim:true
    },
    alt: {
        type:String,
        trim:true
    },  
    // Images end **************
    description:{
        type:String,
        trim:true
    },
    designer:{
        type:String,
        trim:true
    },
    retailPrice:{
        type:Number
    },
    rented:{
        type:Boolean
    }
});

var Inventory = mongoose.model("Inventory", InventorySchema);

module.exports = Inventory;