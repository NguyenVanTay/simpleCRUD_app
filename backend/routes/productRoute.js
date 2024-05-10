/** @format */

const express = require("express");
const Product = require("../models/productModel");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController");

// get product
router.get("/", getProducts);
// get product by id
router.get("/:id", getProduct);
// Create Product
router.post("/", createProduct);
// Delete Product
router.delete("/:id", deleteProduct);
// Update Product
router.put("/:id", updateProduct);

module.exports = router;
