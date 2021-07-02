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

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    res.json(product);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// CREATE
// exports.createProduct = async (req, res) => {
//   try {
//     const item = await new Product(req.body);
//     item.save((err, item) => {
//       if (err) {
//         return res.status(400).json({
//           success: "false",
//           message: err.message,
//         });
//       }
//       res.json({ item });
//     });
//   } catch (err) {
//     return res.status(400).json({
//       success: "false",
//       message: err.message,
//     });
//   }
// };

exports.createProduct = async (req, res) => {
  try {
    Product.insertMany([
      {
        name: "OnePlus Nord 5",
        category: "Phone",
        price: "29999",
        img: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord.jpg",
        stock: "Out of stock",
        delivery: "Fast delivery",
        details: [
          "64MP+8MP+2MP triple rear camera with 1080p video at 30/60 fps, 4k 30 fps | 16MP front camera with 1080p video at 30/60 fps.",
          "6.43-inch, 90Hz fluid AMOLED display with 2400 x 1080 pixels resolution | 410ppi",
          "Memory, Storage & SIM: 8GB RAM | 128GB internal memory on UFS 2.1 storage system.",
          "Dual SIM (nano + nano) | OnePlus Nord CE currently supports dual 4G SIM Cards or a single 5G SIM + 4G SIM.",
          "Chipset: Qualcomm Snapdragon 750G 5G mobile platform with an octa-core processor, Kryo 570 CPU (20% improvement from predecessor), and an Adreno 619 GPU (10% improved graphics performance from predecessor).",
          "Alexa Hands-Free capable: Download the Alexa app to use Alexa hands-free. Play music, make calls, hear news, open apps, navigate, and more, all using just your voice, while on-the-go.",
        ],
      },
      {
        name: "OnePlus Bullets Wireless Z",
        category: "Earphone",
        price: "1999",
        img: "https://images-na.ssl-images-amazon.com/images/I/616bhfyXimL._SL1500_.jpg",
        stock: "In stock",
        delivery: "Normal delivery",
        details: [
          "The Bass Edition comes equipped with Bluetooth v5.0 and is fully compatible with all smartphones. IP55 Water & Sweat Resistance. Bluetooth range : Up to 33ft (10m)",
          "Warp Charge: Charge for 10 minutes, enjoy 10 hours worth of music playback",
          "Massive playtime of up to 17 hours after a full charge",
          "Environmental noise-cancelling algorithm-enabled microphone for perfect calls",
          "With convenient features like Quick Switch, Quick Pair and Magnetic Control, listening to your music on your Bullets Wireless Z Bass Edition is a whole new acoustic experience； Low latency Mode",
        ],
      },
      {
        name: "OnePlus 8T 5G",
        category: "Phone",
        price: "42999",
        img: "https://images-na.ssl-images-amazon.com/images/I/61Tw6LZoaiL._SL1500_.jpg",
        stock: "In stock",
        delivery: "Normal delivery",
        details: [
          "Rear Quad Camera with 48 MP Sony IMX586 Sensor, 16 MP Ultra Wide Angle, 5 MP macro lens and 2 MP monochrome lens | Front Camera with 16 MP Sony IMX471 Sensor",
          "6.55 inch ( 16.63 centimeters) 120 Hz Fluid AMOLED Display with 2400 X 1080 Pixels resolution, 402 PPI density",
          "2.86 GHz Qualcomm Snapdragon 865 Octa-core Processor + Adreno 650 GPU ,Oxygen OS based on Android 11 Operating system",
          "12 GB RAM | 256 GB ROM",
          "4500 mAH Lithium-ion battery with 65 W “Warp charge”",
          "1 year Manufacturer warranty for Device, Battery and in-box Accessories from the date of purchase",
          "Box also includes: OnePlus 8T,Warp Charge 65 Power Adapter, Warp Charge Type-C to Type-C Cable, Quick Start Guide, Welcome Letter, Safety Information and Warranty Card, LOGO Sticker, Case, Screen Protector, SIM Tray Ejector",
        ],
      },
      {
        name: "OnePlus 8 Pro",
        category: "Phone",
        price: "59999",
        img: "https://images-na.ssl-images-amazon.com/images/I/61YSMhOd5EL._SL1500_.jpg",
        stock: "In stock",
        delivery: "Fast delivery",
        details: [
          "48MP rear camera with 4k video at 30/60 fps, 1080p video at 30/60 fps, super slow motion: 720p video at 480 fps, 1080p video at 240fps, time-lapse: 1080p 30fps, 4k 30fps, cine aspect ratio video recording, video hdr, cat&dog face detect & focus, ultrashot hdr, nightscape, super micro, portrait, pro mode, panorama, ai scene detection, raw image, audio zoom, audio 3d, infrared photography camera | 16MP front camera",
          "17.22 centimeters (6.78-inch) 120Hz fluid display with 3168 x 1440 pixels resolution, 513 ppi pixel density and vibrant color effect color support",
          "Memory, Storage & SIM: 8GB RAM | 128GB internal memory | Dual SIM (nano+nano) dual-standby (5G+5G)",
          "Oxygen OS based on Android v10 operating system with 2.86GHz of clock speed with Qualcomm Snapdragon 865, powered by Kryo 585 CPU octa core processor, Adreno 650",
          "4510mAH lithium-ion battery",
          "1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase",
          "Box also includes: Warp charge 30t power adapter, warp type-c cable (support usb 2.0), quick start guide, welcome letter, safety information and warranty card, logo sticker, case, screen protector (pre-applied), sim tray ejector",
        ],
      },
      {
        name: "OnePlus Band",
        category: "Watch",
        price: "2499",
        img: "https://images-na.ssl-images-amazon.com/images/I/61XPTRJZcCL._SL1500_.jpg",
        stock: "In stock",
        delivery: "Normal delivery",
        details: [
          "Removable main tracker design allows for effortless transition between dynamic dual-color strap combos.",
          "On-demand daytime spot checks and continuous sleep monitoring of blood oxygen saturation (Sp02) quickly and accurately highlight potential health issues.",
          "Access key mobile features directly from your wrist â includes music, camera shutter controls, call - message notifications and many more.",
          "Asides from OTA Software Updates, the OnePlus Health App analyzes health data, provides insights and advice on your personal health. OnePlus Health App for iOS platform now available.",
          "5ATM and IP68 certified, the band is dust and water resistant up to 50 meters for 10 minutes.",
        ],
      },
      {
        name: "OnePlus Smart Android TV",
        category: "TV",
        price: "25999",
        img: "https://images-na.ssl-images-amazon.com/images/I/812wg%2BpfXAL._SL1500_.jpg",
        stock: "In stock",
        delivery: "Normal delivery",
        details: [
          "Resolution: HD Ready (1366x768) | Refresh Rate: 60 hertz",
          "Connectivity: 2 HDMI ports to connect set top box, Blu Ray players, gaming console | 2 USB ports to connect hard drives and other USB devices",
          "Sound : 20 Watts Output | Dolby Audio",
          "Smart TV Features: Android TV 9.0 | OnePlus Connect | Google Assistant | Play Store | Chromecast | Shared Album | Supported Apps : Netflix, YouTube, Prime video | Content Calendar | OxygenPlay",
          "Display : LED Panel | Noise Reduction | Colour Space Mapping |Dynamic Contrast | Anti-Aliasing | DCI-P3 93% colour gamut | Gamma Engine",
          "Design: Bezel-less | Screen/Body Ratio = 91.4%",
          "Warranty Information: 1 year comprehensive warranty and additional 1 year on panel provided by the manufacturer from date of purchase",
        ],
      },
      {
        name: "OnePlus Buds",
        category: "Earphone",
        price: "4990",
        img: "https://images-na.ssl-images-amazon.com/images/I/61-COaSmn3L._SL1500_.jpg",
        stock: "In stock",
        delivery: "Fast delivery",
        details: [
          "30 hours of powerful sound.The case is a power bank, allowing up to 30 hours of listening time. Charging for 10 minutes enables your earphones to be listened to for 10 hours.",
          "Loud and clear. Equipped with a unique noise cancellation algorithm and three microphones to improve clarity.",
          "Un-BEAT-able audio. Enjoy richer tones, clearer vocals and deeper bass. Experience 3D stereo with Dolby Atmos or stunning sound quality with Dirac Audio Tuner support.",
          "Tailor made for intuitive taps. Choose how you manage your music. Customizable double tap and long press functions give you more control over your OnePlus Buds.",
          "Synced for real-time sound. Experience industry-leading low latency pairing when you connect OnePlus Buds to your OnePlus phone while you are playing games.",
          "Built for flexibility With an IPX4 rating your OnePlus Buds are safe from splashes so you can stay focused on your active life.",
          "1 year warranty provided by the manufacturer from date of purchase",
        ],
      },
      {
        name: "OnePlus Bullets Wireless Z Bass Edition",
        category: "Earphone",
        price: "1990",
        img: "https://images-na.ssl-images-amazon.com/images/I/61DKcGr12OL._SL1500_.jpg",
        stock: "In stock",
        delivery: "Normal delivery",
        details: [
          "The Bass Edition comes equipped with Bluetooth v5.0 and is fully compatible with all smartphones. IP55 Water & Sweat Resistance. Bluetooth range : Up to 33ft (10m)",
          "Warp Charge: Charge for 10 minutes, enjoy 10 hours worth of music playback",
          "Massive playtime of up to 17 hours after a full charge",
          "Environmental noise-cancelling algorithm-enabled microphone for perfect calls",
          "With convenient features like Quick Switch, Quick Pair and Magnetic Control, listening to your music on your Bullets Wireless Z Bass Edition is a whole new acoustic experience； Low latency Mode",
        ],
      },
      {
        name: "New Apple iPhone 11 (128GB) - Purple",
        category: "Phone",
        price: "57400",
        img: "https://images-na.ssl-images-amazon.com/images/I/71tpxtLD0aL._SL1500_.jpg",
        stock: "In stock",
        delivery: "Normal delivery",
        details: [
          "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
          "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
          "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
          "12MP TrueDepth front camera with Portrait mode, 4K video, and Slo-Mo",
          "Face ID for secure authentication",
          "A13 Bionic chip with third-generation Neural Engine",
          "Fast-charge capable",
        ],
      },
      {
        name: "Apple iPhone 12 Pro Max (128GB) - Pacific Blue",
        category: "Phone",
        price: "125900",
        img: "https://images-na.ssl-images-amazon.com/images/I/71MHTD3uL4L._SL1500_.jpg",
        stock: "In stock",
        delivery: "Fast delivery",
        details: [
          "6.7-inch (17 cm diagonal) Super Retina XDR display",
          "Ceramic Shield, tougher than any smartphone glass",
          "A14 Bionic chip, the fastest chip ever in a smartphone",
          "Pro camera system with 12MP Ultra Wide, Wide and Telephoto cameras; 5x optical zoom range; Night mode, Deep Fusion, Smart HDR 3, Apple ProRAW, 4K Dolby Vision HDR recording",
          "LiDAR Scanner for improved AR experiences, Night mode portraits",
          "12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording",
          "Industry-leading IP68 water resistance",
        ],
      },
      {
        name: "Apple iPad Air ",
        category: "Phone",
        price: "52155",
        img: "https://images-na.ssl-images-amazon.com/images/I/71SAHzzQqkL._SL1500_.jpg",
        stock: "Out of stock",
        delivery: "Normal delivery",
        details: [
          "Stunning 27.69 cm (10.9-inch) Liquid Retina display with True Tone and P3 wide colour",
          "A14 Bionic chip with Neural Engine",
          "Touch ID for secure authentication",
          "12MP back camera, 7MP FaceTime HD front camera",
          "Available in Silver, Space Grey, Rose Gold, Green and Sky Blue",
          "Wide stereo audio",
          "Wi-Fi 6 (802.11ax)",
        ],
      },
      {
        name: "Apple AirPods",
        category: "Earphone",
        price: "15990",
        img: "https://images-na.ssl-images-amazon.com/images/I/71IPFP9WJIL._SL1500_.jpg",
        stock: "In stock",
        delivery: "Normal delivery",
        details: [
          "Automatically on, automatically connected",
          "Easy setup for all your Apple devices",
          "Quick access to Siri by saying “Hey Siri”",
          "Double-tap to play or skip forward",
          "New Apple H1 headphone chip delivers faster wireless connection to your devices",
          "Charges quickly in the case",
          "Case can be charged either wirelessly using a Qi-compatible charging mat or using the Lightning connector",
        ],
      },
      {
        name: "Apple MacBook Pro with Apple M1 Chip",
        category: "Laptop",
        price: "116790",
        img: "https://images-na.ssl-images-amazon.com/images/I/71an9eiBxpL._SL1500_.jpg",
        stock: "In stock",
        delivery: "Fast delivery",
        details: [
          "Apple-designed M1 chip for a giant leap in CPU, GPU, and machine learning performance",
          "Get more done with up to 20 hours of battery life, the longest ever in a Mac",
          "8-core CPU delivers up to 2.8x faster performance to fly through workflows quicker than ever",
          "8-core GPU with up to 5x faster graphics for graphics-intensive apps and games",
          "16-core Neural Engine for advanced machine learning",
          "8GB of unified memory so everything you do is fast and fluid",
          "Superfast SSD storage launches apps and opens files in an instant",
        ],
      },
      {
        name: "Kindle Paperwhite (10th gen) ",
        category: "Phone",
        price: "10499",
        img: "https://images-na.ssl-images-amazon.com/images/I/41aTw6F6DDL.jpg",
        stock: "In stock",
        delivery: "Normal delivery",
        details: [
          "The thinnest, lightest Kindle Paperwhite ever—300 ppi glare-free display, reads like real paper even in bright sunlight.",
          "Now with twice the storage - 8GB - store thousands of books so you can take your library with you.",
          "Now waterproof, so you’re free to read and relax at the beach, by the pool, or in the bath. Your Kindle has been tested to withstand accidental immersion in water.",
          "A single battery charge lasts weeks, not hours.",
          "The built-in adjustable light lets you read indoors and outdoors, day and night.",
        ],
      },
      {
        name: "Samsung Galaxy S21 Ultra 5G",
        category: "Phone",
        price: "105999",
        img: "https://images-na.ssl-images-amazon.com/images/I/917nPCOw9-L._SL1500_.jpg",
        stock: "In stock",
        delivery: "Normal delivery",
        details: [
          "Quad rear camera setup- Main Camera 108MP + Ultra Wide 12MP Dual Pixel Camera + Tele1 3X 10MP Dual Pixel Camera + Tele2 10x 10MP Dual pixel camera | 40MP front facing came",
          "(6.8-inch) Dynamic AMOLED 2X Display, WQHD+ resolution with 3200 X 1440 pixels resolution, 515 PPI with 16M color",
          "Android Pie v10.0 operating system with 2.9GHz Exynos 2100 octa core process",
          "12GB RAM | 256GB internal Storage | Dual SIM (nano+nano) dual-standby (5G+5",
          "5000mAH lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase",
        ],
      },
      {
        name: "Samsung Galaxy S20 FE Cloud Mint",
        category: "Phone",
        price: "44999",
        img: "https://images-na.ssl-images-amazon.com/images/I/71AUfpuoOvL._SL1500_.jpg",
        stock: "Out of stock",
        delivery: "Fast delivery",
        details: [
          "Triple rear camera setup - 8MP OIS F2.4 tele camera + 12MP F2.2 ultra wide + 12MP (2PD) OIS F1.8 wide rear camera | 32MP (2PD) OIS F2.2 front punch hole camera | Rear LED flash",
          "16.40 centimeters (6.5-inch) dynamic AMOLED display, FHD+ capacitive multi-touch touchscreen, quad HD+ resolution with 1080 x 2400 pixels resolution",
          "Memory, Storage & SIM: 8GB RAM | 128GB internal memory expandable up to 1TB | Dual SIM (nano+nano) dual-standby (4G+4G)",
          "Android v10.0 operating system with 2.73GHz+2.5GHz+2GHz Exynos 990 octa core processor",
          "4500mAH lithium-ion battery (Non-removable), face-unlock & finger print sensor",
          "1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase",
          "Box also includes: Non-removable battery included, earphones, travel adapter, USB cable and user manual",
          "MicroSD card slot (Expandable upto 1 TB), dual nano sim, hybrid sim slot, 4G+4G dual stand by",
        ],
      },
      {
        name: "SanDisk Ultra microSD Card 128GB",
        category: "Storage",
        price: "1299",
        img: "https://images-na.ssl-images-amazon.com/images/I/51QiSiop0GS._SL1000_.jpg",
        stock: "In stock",
        delivery: "Fast delivery",
        details: [
          "Ideal for Android smartphones and tablets, and MIL cameras",
          "Up to 1TB to store even more hours of Full HD video",
          "Up to 120MB/s transfer speeds let you move up to 1000 photos in a minute [32GB-1TB]",
          "Load apps faster with A1-rated performance",
          "Class 10 for Full HD video recording and playback",
        ],
      },
      {
        name: "HP 128GB Class 10 MicroSD Card",
        category: "Storage",
        price: "1525",
        img: "https://images-na.ssl-images-amazon.com/images/I/51pA4SwiZRL._SL1000_.jpg",
        stock: "In stock",
        delivery: "Fast delivery",
        details: [
          "HP 128GB Class 10 MicroSD Memory Card (U1 TF Card  128GB)",
          "Class 10, UHS-I, U1 Memory Card with Adapter",
          "Perfect for storing and transferring more mobile content across your devices, including photos, music and movies for entertainment or apps and e-books for school or work",
          "Ideal for the latest tablets, PCs, smartphones and mobile devices",
          "16-128GB: Read speed up to 80MB/s, write minumum 30MB/s",
          "Importer Details: Fortune marketing Pvt Ltd D1/2 -Okhla Industrial Area Phase -II New Delhi 110020",
          "Country of Origin: Taiwan",
        ],
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
