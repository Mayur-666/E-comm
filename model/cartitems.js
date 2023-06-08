const mongoose = require("mongoose");

const cartitemsSchema = new mongoose.Schema({
    id:String,
    //product:Product
    quantity:Numbers
});

const cartitems = mongoose.model("Cartitems",cartitemsSchema);
module.exports = cartitems;
