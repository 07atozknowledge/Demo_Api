const mongoose = require("mongoose");



const productSchema = new mongoose.Schema({
  name : {
    type: String,
    required: true
  },

  price : {
    type: Number,
    required: true
  },

  featured : {
    type: Boolean,
    default: false
  },

  rating : {
    type: String,
    
  },

  createdAt : {
    type: Date,
    default: Date.now()
  },

  company : {
    type: String,
    enum:{
        values:[ 'apple' , 'samsung' , 'dell' , 'mi' , 'realme'],
        message:`{VALUE} is not supported` 
    }
  }

});

module.exports = mongoose.model("Product", productSchema );