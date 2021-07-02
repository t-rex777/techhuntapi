const { getProducts, createProduct, getProductById } = require("./controller");
const express = require("express");
const router = express.Router();

router
  .route("/product")
  .get(getProducts)

  .post(createProduct);

router.get("/product/:productId", getProductById);

module.exports = router;
