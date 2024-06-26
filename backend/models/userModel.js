/** @format */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema(
  {
    username: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
  },
  { timestamps: true }
);
const User = mongoose.model("User", UserSchema);
module.exports = User;
