const UserModel = require("../Models/UserModel");
const asyncHandler = require("express-async-handler");
const GenerateToken = require("../Token/GenerateToken");
const {validationResult } = require("express-validator");

const UserSignUpFunction = asyncHandler(

  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }
    const { email, password, name } = req.body;
    const DoesEmailExist = await UserModel.findOne({ email });
    if (DoesEmailExist) {
      res.status(409);
      throw new Error("email already exist");
    }

    const user = await UserModel.create({ name, password, email });
    if (user) {
      res.status(200);
      res.send({ email, password, name });
    } else {
      res.status(501);
      res.send("Internal Server Error");
    }
  }
);

const UserLoginFunction = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user && (await user.ComparePassword(password))) {
      res.json({
        id: user._id,
        name: user.name,
        email: user.email,
        password: user.password,
        isAdmin: user.isAdmin,
        ProfileImage: user.profileImage,
        token: GenerateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("Incorrect Username or Password");
    }
  } catch (error) {
    throw new Error(error);
  }
});

const GetUserDetail = asyncHandler(async (req, res) => {
  const user = await UserModel.findById(req.user._id);
  if (user) {
    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      isAdmin: user.isAdmin,
      ProfileImage: user.profileImage,
    });
  } else {
    res.status(401);
    res.send("user not found");
  }
});

module.exports = { UserSignUpFunction, UserLoginFunction, GetUserDetail };
