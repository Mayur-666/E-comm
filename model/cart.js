const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    id:String,
    //cartItems: cartItems[]
    shippingAddress:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    zip:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    phone:Number,
    status:String,
    totalPrice:{
        type:Number,
        default:0,
        min:0
    },
    //user :user
    dateOrdered:{
        type:Date,
        default:Date.now
    }
})

const cart = mongoose.model("Cart",cartSchema);

module.exports= cart;