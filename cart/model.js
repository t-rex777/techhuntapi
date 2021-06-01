const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  name : String,
  quantity:Number,
  price : Number,
  img:String,
  stock: String,
  delivery: String
},{timestamps:true})


module.exports = mongoose.model("Cart",cartSchema);