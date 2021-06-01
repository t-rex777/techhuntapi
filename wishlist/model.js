const mongoose = require("mongoose");

const wishlistSchema = mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
  img: String,
  stock: String,
  delivery: String
}, { timestamps: true })



module.exports = mongoose.model("Wishlist", wishlistSchema);