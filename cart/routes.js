const express = require("express");
const router = express.Router();
const { authorizeToken } = require("../user/controller");
const {
  createCartItem,
  updateCartItem,
  deleteCartItem,
  getCartItem,
} = require("./controller");

router
  .use(authorizeToken)
  .get("/cart", getCartItem)
  .post("/cart/create/:cartItemId", createCartItem)
  .post("/cart/update/:cartItemId", updateCartItem)
  .post("/cart/delete/:cartItemId", deleteCartItem);

module.exports = router;
