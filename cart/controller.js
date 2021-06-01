const Cart = require("./model");
const { extend , union} = require("lodash");

exports.getCartItemById = async (req, res, next, cartItemId) => {
  const cartItem = await Cart.findById(cartItemId);
  req.cartItem = cartItem;
  next();
}

exports.getOneCartItem = (req, res) => {
  const { cartItem } = req;
  console.log(cartItem);
  return res.json( cartItem );
}

exports.getCartItems = async (req, res) => {
  try {
    const cartItems = await Cart.find({});
    return res.json( cartItems )
  }
  catch (err) {
    return res.status(400).json({
      success: "false",
      error: err.message
    })
  }
}

exports.createCartItem = (req, res) => {

  const newCartItem = new Cart(req.body)
  console.log( newCartItem )
  newCartItem.save((err, cart) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to add to cart",
      });
    }
    res.json({ cart });
  });
}

exports.updateCartItem = async (req, res) => {
  const updatedCartItem = req.body;
  let { cartItem } = req;
  cartItem = extend(cartItem, updatedCartItem);
  try {
    cartItem = await cartItem.save();
    res.json(cartItem)
  } catch (err) {
    res.status(400).json({
      success: "false",
      error: err.message
    })
  }
}

exports.deleteCartItem = (req, res) => {
  const { cartItem } = req;
  cartItem.deleteOne((err, deletedProduct) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to delete the product",
      });
    }
    return res.json({
      message: "The product deleted successfully",
    });
  });
}