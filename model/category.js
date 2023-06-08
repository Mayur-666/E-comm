const mongoose= require("mongoose");

const categorySchema = new mongoose.Schema({
    id: String,
    name:String,
    color:String,
    icon :String,
    image:String
});

const category = mongoose.model("Category",categorySchema);
module.exports= category;
