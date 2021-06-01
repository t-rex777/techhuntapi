const express = require("express");
const router = express.Router();
const { getUser, signIn, signUp, authorizeToken, updateUser, deleteUser, getCartItem,getWishlistItem,createCartItem,createWishlistItem } = require("./controller")

//routes
router
  // .get("/users", getAllUsers)
  .get("/user", getUser)
  .post("/signup", signUp)
  .post("/signIn", signIn)

router.use(authorizeToken)
.get("/cart/:cartItemId",getCartItem)
.get("/wishlist",getWishlisttItem)
.post("/cart/create/:cartItemId",createCartItem)
.post("/wishlist/create/:WishlistId",createWishlistItem)
.post("/user/update", updateUser)
.post("/user/delete", deleteUser);

module.exports = router;