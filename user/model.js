const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name : {
    type: String,
    required : true,
  },
  email : {
    type: String,
    required : true
  },
  encrypted_password : {
    type: String,
    required : true
  },
  cart : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : "Product",
    quantity:Number
  }],
   wishlist : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : "Product"
  }],
},{timestamps:true});

userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.encrypted_password = this.securePassword(password);
  })
  .get(function () {
    return _password;
  });

userSchema.methods = {
  securePassword: function (plainPassword) {
    if (!plainPassword) {
      return;
    }
    try {
      const secret = process.env['USER_SECRET'];
      return createHmac("sha256", secret).update(plainPassword).digest("hex");
    } catch (error) {
      return;
    }
  },
  authenticate: function (plainPassword) {
    return this.encrypted_password === this.securePassword(plainPassword);
  },
};


module.exports = mongoose.model("User",userSchema);