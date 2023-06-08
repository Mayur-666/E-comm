const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    id:String,
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        required:true
    },
    passwordhash:{
        type:String,
        required:true
    },
    address:{
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
    
    phone:{
        type:Number,
        required:true
    },
    admin:{
        type:Boolean,
        default: false,
    }
});
const users = mongoose.model