const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const UserModel = require("../Models/UserModel");

const Protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const DecodedToken = jwt.verify(token, process.env.TOKEN_SCERETE_KEY);
      req.user = await UserModel.findById(DecodedToken.id).select("-password");
      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not Authorized , Not Valid Token");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not Authorized , Not Valid Token");
  }
});

module.exports = { Protect };
