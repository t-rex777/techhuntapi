const Wishlist = require("./model");
const {extend} = require("lodash");
exports.getWishlistById = async (req, res, next, wishlistId) => {
  try {
    const wishlistItem = await Wishlist.findById(wishlistId);
    req.wishlistItem = wishlistItem;
    next();
  }
  catch (err) {
    console.log(err);
  }
}

// READ
exports.getOneWishlist = async(req,res)=>{
  try{
 await res.json(req.wishlistItem)
  }catch(err){
    res.status(400).json({
      success : "false",
      message : err.message
    })
  }
}

exports.getWishlists = async (req, res) => {
  try {
    const wishlistItems = await Wishlist.find({});
    return res.json(wishlistItems)
  }
  catch (err) {
    return res.status(400).json({
      success: "false",
      error: err.message
    })
  }
}

// CREATE
exports.createWishlist = async (req, res) => {
  try {
    const newWishlist = await new Wishlist(req.body);
    newWishlist.save((err, wishlist) => {
      if (err) {
        return res.status(400).json({
          success: "false",
          error: err.message
        })
      }
      res.json(wishlist)
    })
  }
  catch (err) {
    return res.status(400).json({
      success: "false",
      error: err.message
    })
  }
}

// UPDATE
exports.updateWishlist = async (req, res) => {
  try {
    let { wishlistItem } = req;
    const updatedWishlistItem = req.body;
    wishlistItem = extend(wishlistItem, updatedWishlistItem);
   await wishlistItem.save((err,wishlist)=>{
      if(err){
        res.status(400).json({
          success : "false",
          message : err.message
        })
      }
      res.json(wishlist)
    })
  }catch(err){
    res.status(400).json({
          success : "false",
          message : err.message
        })
  }
}

// DELETE
exports.removeWishlist = async(req,res) => {
  try {
    let { wishlistItem } = req;
   await wishlistItem.deleteOne((err,wishlist)=>{
      if(err){
        res.status(400).json({
          success : "false",
          message : err.message
        })
      }
      res.json({
        message : "item deleted successfully!"
      })
    })
  }catch(err){
    res.status(400).json({
          success : "false",
          message : err.message
        })
  }
}