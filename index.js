require("dotenv").config()
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const mySecret = process.env.URI;

//middlewares
app.use(bodyParser.json());
app.use(cors());

const uri =
  mySecret;

// connecting to server
mongoose.connect(uri,
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log("DB CONNECTED!!!!!!!!!!!"))
  .catch(err => console.log(err));

// routes
const productRoutes = require("./product/routes");
const userRoutes = require("./user/routes");

// API
app.use("/api", productRoutes);

app.use("/api", userRoutes);


app.get("/", (req, res) => {
  res.send("hello world!");
})

app.listen(4000, (req, res) => {
  console.log(`server started at 4000`)
})