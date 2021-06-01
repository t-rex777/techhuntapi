const express = require("express");
const router = express.Router();
const {getWishlists,createWishlist,getWishlistById,getOneWishlist,updateWishlist,removeWishlist} = require("./controller");

router.param("wishlistId",getWishlistById);

router.route("/wishlist")
.get(getWishlists)
.post(createWishlist);

router.route("/wishlist/:wishlistId")
.get(getOneWishlist)
.post(updateWishlist)
.delete(removeWishlist);

module.exports = router;