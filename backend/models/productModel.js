/** @format */

const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema(
  {
    name: { type: String, require: [true, "please enter product name"] },
    quantity: { type: Number, default: 0 },
    price: { type: Number, default: 0 },
    image: { type: String, require: false },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
