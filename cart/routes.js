const express = require("express");
const router = express.Router();
const {
  getCartItems,
  getOneCartItem,
  createCartItem,
  getCartItemById,
  deleteCartItem,
  updateCartItem } = require("./controller");

router.param("cartItemId", getCartItemById);

router.route("/cart")
  .get(getCartItems)
  .post(createCartItem)

router.route("/cart/:cartItemId")
  .get(getOneCartItem)
  .post(updateCartItem)
  .delete(deleteCartItem)


module.exports = router;