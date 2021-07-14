const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: String,
  price: Number,
  category : String,
  img: String,
  stock: String,
  delivery: String,
  details:[]
},{timestamps:true})

module.exports = mongoose.model("Product", productSchema);