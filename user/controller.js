const User = require("./model");
const jwt = require("jsonwebtoken");
const {extend,concat} = require("lodash");

//  authorization
exports.authorizeToken = async (req, res, next) => {
  if (
    !req.headers["authorization"] &&
    typeof req.headers["authorization"] !== "string"
  ) {
    return res.status(401).json({
      message: "No tokens found",
    });
  }

  try {
    const accessToken = req.headers["authorization"].split(" ")[1];
    const { userId } = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    req.userId = userId;
    return next();
  } catch (error) {
    res.status(401).json({
      message: "token cannot be verified! please check it again.",
    });
  }
};


exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.userId)
    return res.send(user);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

exports.getCartItem = async(req,res)=>{
  try{
    let user = await User.findById(req.userId);
    return res.send(user.cart)
  }catch(error){
    res.status(400).json({
      message : error.message
    })
  }
}
exports.getWishlistItem = async(req,res)=>{
  try{
    let user = await User.findById(req.userId);
    return res.send(user.wishlist)
  }catch(error){
    res.status(400).json({
      message : error.message
    })
  }
}

// Create
exports.signUp = async (req, res) => {
  try {
    const user = await new User(req.body);
    user.save((err, user) => {
      if (err) {
        return res.status(400).json({
          error: err.message,
          message: "User didn't save",
        });
      }
      res.send(user);
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

exports.signIn = async (req, res) => {
  try {
    const user = await req.body;
    const { email, password } = user;
    const userEmail = email;

    await User.findOne({ email: userEmail })
      .populate("cart")
      .populate("wishlist")
      .exec((err, user) => {
        if (err || user === null) {
          return res.status(400).json({
            message: "user does not exists!",
          });
        } else if (!user.authenticate(password)) {
          return res.status(401).json({
            message: "please enter the correct password!",
          });
        }
        const accessToken = jwt.sign(
          { userId: user._id },
          process.env['ACCESS_TOKEN_SECRET'],
          {
            expiresIn: "15m",
          }
        );
        const refreshToken = jwt.sign(
          { userId: user._id },
          process.env['REFRESH_TOKEN_SECRET'],
          {
            expiresIn: "7d",
          }
        );
        res.json({ user, accessToken, refreshToken });
      });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// new accessTokens
exports.createAccessToken = (req, res) => {
  if (
    !req.headers["refresh-token"] &&
    typeof req.headers["refresh-token"] !== "string"
  ) {
    return res.status(401).json({
      message: "No refresh tokens found",
    });
  }

  try {
    const oldRefreshToken = req.headers["refresh-token"].split(" ")[1];
    const { userId } = jwt.verify(
      oldRefreshToken,
      process.env['REFRESH_TOKEN_SECRET']
    );
    const refreshToken = jwt.sign(
      { userId: userId },
      process.env['REFRESH_TOKEN_SECRET'],
      {
        expiresIn: "7d",
      }
    );
    const accessToken = jwt.sign(
      { userId: userId },
      process.env['ACCESS_TOKEN_SECRET'],
      {
        expiresIn: "15m",
      }
    );
    res.json({ accessToken, refreshToken });
  } catch (error) {
    res.status(401).json({
      message: "refresh token cannot be verified! please check it again.",
    });
  }
};

exports.createCartItem = async(req,res)=>{
  try{
    let user = await User.findById(req.userId);
    let {cartItemId} = req.params;
    user = extend(user,{
      cart:concat(user.cart,cartItemId) //update quantity
    })
    user.save((err,updatedUser)=>{
      if(err){
        return res.status(400).json({
          message : err.message
        })
      }
      return res.json(user.cart)
    })
  }catch(error){
    res.status(400).json({
      message : error.message
    })
  }
} 

exports.createWishlistItem = async(req,res)=>{
  try{
    let user = await User.findById(req.userId);
    let {cwishlistItemId} = req.params;
    user = extend(user,{
      wishlist:concat(user.wishlist,wishlistItemId)
    })
        user.save((err,updatedUser)=>{
      if(err){
        return res.status(400).json({
          message : err.message
        })
      }
      return res.json(user.wishlist)
    })
  }catch(error){
    res.status(400).json({
      message : error.message
    })
  }
}

//Update
exports.updateUser = async (req, res) => {
  try {
    let updatedUser = req.body;
    let user = await User.findById(req.userId)
    updatedUser = await extend(user, updatedUser);
    updatedUser.save((err, updatedUser) => {
      if (err) {
        return res.status(400).json({
          message: "User didn't updated",
        });
      }
      res.send(updatedUser);
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

exports.updateCartItem = async(req,res)=>{
  try{
    let user = await User.findById(req.userId);
    let cartItemId = req.params;
    let cartQuantity = req.body;

  // user.cart.find()

    user = extend(user,{
      cart:concat(user.cart,cartItemId)
    })
    user.save((err,updatedUser)=>{
      if(err){
        return res.status(400).json({
          message : err.message
        })
      }
      return res.json(user.cart)
    })
  }catch(error){
    res.status(400).json({
      message : error.message
    })
  }
}




// Delete
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.userId)
    user.deleteOne((err, user) => {
      if (err) {
        return res.status(400).json({
          message: "user didn't delete!",
        });
      }
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

