const { getProducts, createProduct } = require("./controller");
const express = require("express");
const router = express.Router();

router.route("/product")
  .get(getProducts)
  .post(createProduct);

module.exports = router;