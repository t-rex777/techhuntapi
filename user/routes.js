const express = require("express");
const router = express.Router();

const {
  getCartItem,
  createCartItem,
  updateCartItem,
  deleteCartItem,
  sendStripeToken,
  clearCart,
} = require("./cartController");

const {
  getUser,
  signIn,
  signUp,
  authorizeToken,
  updateUser,
  deleteUser,
  createAccessToken,
} = require("./userController");

const {
  getWishlistItem,
  createWishlistItem,
  deleteWishlistItem,
} = require("./wishlistController");

//routes
router
  .get("/token/access", createAccessToken)
  .post("/signup", signUp)
  .post("/signin", signIn);

router
  .use(authorizeToken)
  .get("/user", getUser)
  .post("/user/update", updateUser)
  .post("/user/delete", deleteUser)

  .get("/cart", getCartItem)
  .post("/cart/create/:cartItemId", createCartItem)
  .post("/cart/update/:cartItemId", updateCartItem)
  .post("/cart/delete/:cartItemId", deleteCartItem)
  .post("/cart/clear", clearCart)

  .post("/stripepayment", sendStripeToken)

  .get("/wishlist", getWishlistItem)
  .post("/wishlist/create/:wishlistId", createWishlistItem)
  .post("/wishlist/delete/:wishlistItemId", deleteWishlistItem);

module.exports = router;
