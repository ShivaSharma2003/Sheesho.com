const express = require("express");
const router = express.Router();
const { Protect } = require("../Middleware/Protect");
const {
  UserSignUpFunction,
  UserLoginFunction,
  GetUserDetail,
} = require("../Controller/UserController");
const { body } = require("express-validator");

router.post(
  "/signup",
  [
    body("email").isEmail(),
    body("password").isLength({ min: 8 }),
    body("name").isString(),
  ],
  UserSignUpFunction
);

router.route("/login").post(UserLoginFunction);
router.route("/getuser").get(Protect, GetUserDetail);

module.exports = router;
