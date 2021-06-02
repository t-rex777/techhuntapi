const User = require("../user/model");
const { extend, concat } = require("lodash");

// Read
exports.getCartItem = async (req, res) => {
  try {
    let user = await User.findById(req.userId).populate("cart.item");
    return res.send(user.cart);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

//create
exports.createCartItem = async (req, res) => {
  try {
    let user = await User.findById(req.userId);
    let { cartItemId } = req.params;
    user = extend(user, {
      cart: concat(user.cart, { item: cartItemId, quantity: 1 }), //update quantity
    });
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

// update
exports.updateCartItem = async (req, res) => {
  try {
    let user = await User.findById(req.userId);
    let { cartItemId } = req.params;
    let { quantity } = req.body;
    user.cart.forEach((data) => {
      if (data.item == cartItemId) {
        data.quantity = quantity;
      }
    });
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

// delete
exports.deleteCartItem = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    const { cartItemId } = req.params;
    let finalCartItems = [];
    user.cart.forEach((data) => {
      if (data.item != cartItemId) {
        finalCartItems.unshift(data);
      }
    });
    user.cart = finalCartItems;
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
