const express = require("express");
const router = express.Router();

const {
  getCartItem,
  createCartItem,
  updateCartItem,
  deleteCartItem
} = require("./cartController");

const {
  getUser,
  signIn,
  signUp,
  authorizeToken,
  updateUser,
  deleteUser,
} = require("./userController");

const {
  getWishlistItem,
  createWishlistItem,
  deleteWishlistItem,
} = require("./wishlistController");

//routes
router.post("/signup", signUp).post("/signIn", signIn);

router
  .use(authorizeToken)
  .get("/user", getUser)
  .post("/user/update", updateUser)
  .post("/user/delete", deleteUser)

  .get("/cart", getCartItem)
  .post("/cart/create/:cartItemId", createCartItem)
  .post("/cart/update/:cartItemId", updateCartItem)
  .post("/cart/delete/:cartItemId", deleteCartItem)

  .get("/wishlist", getWishlistItem)
  .post("/wishlist/create/:wishlistId", createWishlistItem)
  .post("/wishlist/delete/:wishlistItemId", deleteWishlistItem);

module.exports = router;
