const express = require("express");
const router = express.Router();
const {Protect} = require('../Middleware/Protect');
const {UserSignUpFunction , UserLoginFunction  , GetUserDetail} = require('../Controller/UserController');


router.route('/signup').post(UserSignUpFunction)
router.route('/login').post(UserLoginFunction)
router.route('/getuser').get(Protect , GetUserDetail)

module.exports = router