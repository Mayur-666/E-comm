const mongoose = require('mongoose');
const productSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        richdiscription:{
            type:String,
            default:''
        },
        image:{
            type:String,
            defaut:''
        },
        images:[{
            type:String,
            default:''
        }],
        price:{
            type:Number,
            default:0
        },
        category:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Category"
        },
        countInNumber:{
            type:Number,
            required:true,
            min:0
        },
        rating:{
            type:Number,
            default:0
        },
        dateCreated:{
            type:Date,
            default:Date.now
        },
        isFeatured:{
            type:Boolean,
            default:false
        }
    }
)

const product = new mongoose.model("product",productSchema);

module.exports=product;