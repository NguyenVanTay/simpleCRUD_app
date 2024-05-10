/** @format */
const User = require("../models/userModel");

const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check if name enter

    if (!name) {
      return res.json({
        error: "name is required",
      });
    }

    const exist = await User.findOne({ email });
    // console.log(exist);
    if (exist) {
      return res.json({
        error: "email already exist",
      });
    }

    // if (!email) {
    //   return res.json({
    //     error: "email is required ",
    //   });
    // }
    // check password is good

    if (!password || password.length < 6) {
      return res.json({
        error: "password is required and should be 6 characters long",
      });
    }
    const user = await User.create({
      name,
      email,
      password,
    });
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  registerController,
};
