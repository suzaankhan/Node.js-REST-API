
// this file is for schema of our products
// npm run dev  - to start
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id : {
        type : Number,
        required : [true, "product id is not defined"]
    },
    name : {
        type : String,
        lowercase : true,
        required : [true, "product name is not defined"]
    },
    price : {
        type : Number,
        required : [true, "product price is not defined"]
    },
    featured : {
        type : Boolean,
        default : true
    },
    rating : {
        type : Number,
        default : 4.8
    },
    createdAt : {
        type : Date,
        default : Date.now()
    },
    company : {
        type : String,
        lowercase : true,
        enum : {
            values : ['apple', 'samsung', 'realme', 'dell', 'mi', 'IQOO'],
            message : `value is not supported`
        }
    }
});

module.exports = new mongoose.model("Product", productSchema);