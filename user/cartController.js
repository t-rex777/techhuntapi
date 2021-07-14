const User = require("./model");
const { extend, concat } = require("lodash");
const { uuid } = require("uuidv4");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

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

exports.sendStripeToken = async (req, res) => {
  const { token, amount } = req.body;
  const idempotencyKey = uuid();
  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      stripe.charges
        .create(
          {
            amount: amount * 100,
            currency: "inr",
            customer: customer.id,
            receipt_email: token.email,
            description: "a test account",
            shipping: {
              name: token.card.name,
              address: {
                line1: token.card.address_line1,
                line2: token.card.address_line2,
                city: token.card.address_city,
                country: token.card.address_country,
                postal_code: token.card.address_zip,
              },
            },
          },
          { idempotencyKey }
        )
        .then((result) => res.status(200).json(result))
        .catch((err) => log.error(err));
    });

  // const session = await stripe.checkout.sessions.create({
  //   payment_method_types: ['card'],
  //   shipping = {
  //     address :
  //   },
  //   line_items: [
  //     {
  //       price_data: {
  //         currency: 'usd',
  //         product_data: {
  //           name: 'T-shirt',
  //         },
  //         unit_amount: 2000,
  //       },
  //       quantity: 1,
  //     },
  //   ],
  //   mode: 'payment',
  //   success_url: 'https://example.com/success',
  //   cancel_url: 'https://example.com/cancel',
  // });

  // res.redirect(303, session.url);
  // res.json(session)
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

exports.clearCart = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    user.cart = [];
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
