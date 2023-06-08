//implementing required modules
const path = require("path");
const express = require("express");
const app = express();
const bodyparser= require('body-parser');
const morgn =require('morgan');
const cors= require('cors');
//database connectivity
const mongoose = require('mongoose');
mongoose.set('strictQuery',true);
mongoose.connect("mongodb+srv://itish_jain:1234@cluster0.vxfie1s.mongodb.net/acro?retryWrites=true&w=majority").then(()=>{
    console.log("connection success!!");
}).catch((err)=>{
    console.log(err);
});

//setting static ,view, partials locations
//const static_path = path.join(__dirname,"/public");
//const view_path = path.join(__dirname,"/public/view");
//const partial_path = path.join(__dirname,"/public/partials");

//middleware

app.use(express.urlencoded({extended:true}));
app.use(bodyparser.json());
//app.use(express.static(static_path));
app.use(morgn('tiny'));
//app.set('view engine','hbs');
//app.set('views',view_path);
//hbs.registerPartials(partial_path);

//setting environmental variable 
//require('dotenv/config');

// cross platform connection 
app.use(cors());
app.options("*",cors());
//routing

app.use(require("./routes/product.js"));

//server config
app.listen('8000',()=>{
    console.log("server is running !!");
})