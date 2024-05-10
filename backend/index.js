/** @format */

const express = require("express");
const mongoose = require("mongoose");

const productRoute = require("./routes/productRoute");
const authRoute = require("./routes/authRoute");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
require("dotenv/config");

// midleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

// routes
// product
app.use("/api/product", productRoute);
app.use("/api/auth", authRoute);

const port = process.env.PORT || 8989;
const dboptions = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose
  .connect(process.env.DB_URI, dboptions)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`sever is running on port ${port}`);
    });
  })
  .catch(() => {
    console.log("connect failed !");
  });
