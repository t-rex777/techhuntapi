const express = require("express");
const router = express.Router();
const { authorizeToken } = require("../user/controller");
const {
  deleteWishlistItem,
  createWishlistItem,
  getWishlistItem,
} = require("./controller");

router
  .use(authorizeToken)
  .get("/wishlist", getWishlistItem)
  .post("/wishlist/create/:wishlistId", createWishlistItem)
  .post("/wishlist/delete/:wishlistItemId", deleteWishlistItem);

module.exports = router;
