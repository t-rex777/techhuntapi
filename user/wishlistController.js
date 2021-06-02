const User = require("./model");
const { extend, concat } = require("lodash");

//read
exports.getWishlistItem = async (req, res) => {
  try {
    let user = await User.findById(req.userId).populate("wishlist");
    return res.send(user.wishlist);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

//create
exports.createWishlistItem = async (req, res) => {
  try {
    let user = await User.findById(req.userId);
    let { wishlistId } = req.params;
    user = extend(user, {
      wishlist: concat(user.wishlist, wishlistId),
    });
    user.save((err, updatedUser) => {
      if (err) {
        return res.status(400).json({
          message: err.message,
        });
      }
      return res.json(updatedUser.wishlist);
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// delete
exports.deleteWishlistItem = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    const { wishlistItemId } = req.params;
    let finalWishlistItems = [];
    user.wishlist.forEach((data) => {
      if (data.item != wishlistItemId) {
        finalWishlistItems.unshift(data);
      }
    });
    user.wishlist = finalWishlistItems;
    user.save((err, updatedUser) => {
      if (err) {
        return res.status(400).json({
          message: err.message,
        });
      }
      return res.json(updatedUser.cart);
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
