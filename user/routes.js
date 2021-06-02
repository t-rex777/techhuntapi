const express = require("express");
const router = express.Router();
const {
  getUser,
  signIn,
  signUp,
  authorizeToken,
  updateUser,
  deleteUser,
  getCartItem,
  getWishlistItem,
  createCartItem,
  createWishlistItem,
  updateCartItem,
  deleteCartItem,
  deleteWishlistItem,
} = require("./controller");

//routes
router
  .get("/user", getUser)
  .post("/signup", signUp)
  .post("/signIn", signIn);

router
  .use(authorizeToken)
  .get("/cart", getCartItem)
  .get("/wishlist", getWishlistItem)
  .post("/cart/create/:cartItemId", createCartItem)
  .post("/cart/update/:cartItemId", updateCartItem)
  .post("/wishlist/create/:wishlistId", createWishlistItem)
  .post("/user/update", updateUser)
  .post("/user/delete", deleteUser)
  .post("/cart/delete/:cartItemId", deleteCartItem)
  .post("/wishlist/delete/:wishlistItemId", deleteWishlistItem);

module.exports = router;
