/** @format */

const express = require("express");

const router = express.Router();

const { registerController } = require("../controllers/authController");
const { route } = require("./productRoute");

// router.get("/test", test);
router.post("/register", registerController);
module.exports = router;
