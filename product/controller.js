const Product = require("./model");

// READ
exports.getProducts = async (req, res) => {
  try {
    const allProducts = await Product.find({});
    return res.json(allProducts);
  } catch (err) {
    return res.json({
      success: "false",
      message: err.message,
    });
  }
};
// CREATE
exports.createProduct = async (req, res) => {
  try {
    const item = await new Product(req.body);
    item.save((err, item) => {
      if (err) {
        return res.status(400).json({
          success: "false",
          message: err.message,
        });
      }
      res.json({ item });
    });
  } catch (err) {
    return res.status(400).json({
      success: "false",
      message: err.message,
    });
  }
};

exports.createProduct = async (req, res) => {
  try {
    Product.insertMany([
      {
        name: "OnePlus Nord 5",
        price: "29999",
        img: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord.jpg",
        stock: "Out of stock",
        delivery: "Fast delivery",
      },
      {
        name: "OnePlus Bullets Wireless Z",
        price: "1999",
        img: "https://images-na.ssl-images-amazon.com/images/I/616bhfyXimL._SL1500_.jpg",
        stock: "In stock",
        delivery: "Normal delivery",
      },
      {
        name: "OnePlus 8T 5G",
        price: "42999",
        img: "https://images-na.ssl-images-amazon.com/images/I/61Tw6LZoaiL._SL1500_.jpg",
        stock: "In stock",
        delivery: "Normal delivery",
      },
      {
        name: "OnePlus 8 Pro",
        price: "59999",
        img: "https://images-na.ssl-images-amazon.com/images/I/61YSMhOd5EL._SL1500_.jpg",
        stock: "In stock",
        delivery: "Fast delivery",
      },
      {
        name: "OnePlus Band",
        price: "2499",
        img: "https://images-na.ssl-images-amazon.com/images/I/61XPTRJZcCL._SL1500_.jpg",
        stock: "In stock",
        delivery: "Normal delivery",
      },
      {
        name: "OnePlus Smart Android TV",
        price: "25999",
        img: "https://images-na.ssl-images-amazon.com/images/I/812wg%2BpfXAL._SL1500_.jpg",
        stock: "Out of stock",
        delivery: "Normal delivery",
      },
      {
        name: "OnePlus Buds",
        price: "4990",
        img: "https://images-na.ssl-images-amazon.com/images/I/61-COaSmn3L._SL1500_.jpg",
        stock: "In stock",
        delivery: "Fast delivery",
      },
      {
        name: "OnePlus Bullets Wireless Z Bass Edition",
        price: "1990",
        img: "https://images-na.ssl-images-amazon.com/images/I/61DKcGr12OL._SL1500_.jpg",
        stock: "In stock",
        delivery: "Normal delivery",
      },
      {
        name: "New Apple iPhone 11 (128GB) - Purple",
        price: "57400",
        img: "https://images-na.ssl-images-amazon.com/images/I/71tpxtLD0aL._SL1500_.jpg",
        stock: "In stock",
        delivery: "Normal delivery",
      },
      {
        name: "Apple iPhone 12 Pro Max (128GB) - Pacific Blue",
        price: "125900",
        img: "https://images-na.ssl-images-amazon.com/images/I/71MHTD3uL4L._SL1500_.jpg",
        stock: "In stock",
        delivery: "Fast delivery",
      },
      {
        name: "Apple iPad Air ",
        price: "52155",
        img: "https://images-na.ssl-images-amazon.com/images/I/71SAHzzQqkL._SL1500_.jpg",
        stock: "Out of stock",
        delivery: "Normal delivery",
      },
      {
        name: "Apple AirPods",
        price: "15990",
        img: "https://images-na.ssl-images-amazon.com/images/I/71IPFP9WJIL._SL1500_.jpg",
        stock: "In stock",
        delivery: "Normal delivery",
      },
      {
        name: "Apple MacBook Pro with Apple M1 Chip",
        price: "116790",
        img: "https://images-na.ssl-images-amazon.com/images/I/71an9eiBxpL._SL1500_.jpg",
        stock: "In stock",
        delivery: "Fast delivery",
      },
      {
        name: "Kindle Paperwhite (10th gen) ",
        price: "10499",
        img: "https://images-na.ssl-images-amazon.com/images/I/41aTw6F6DDL.jpg",
        stock: "In stock",
        delivery: "Normal delivery",
      },
      {
        name: "Samsung Galaxy S21 Ultra 5G",
        price: "105999",
        img: "https://images-na.ssl-images-amazon.com/images/I/917nPCOw9-L._SL1500_.jpg",
        stock: "In stock",
        delivery: "Normal delivery",
      },
      {
        name: "Samsung Galaxy S20 FE Cloud Mint",
        price: "44999",
        img: "https://images-na.ssl-images-amazon.com/images/I/71AUfpuoOvL._SL1500_.jpg",
        stock: "Out of stock",
        delivery: "Fast delivery",
      },
    ])
      .then((data) => console.log("products added successfully", data))
      .catch((err) => console.log(err));
  } catch (err) {
    return res.status(400).json({
      success: "false",
      message: err.message,
    });
  }
};
