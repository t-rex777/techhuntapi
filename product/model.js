const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: String,
  price: Number,
  quantity: Number,
  img: String,
  stock: String,
  delivery: String
},{timestamps:true})

module.exports = mongoose.model("Product", productSchema);