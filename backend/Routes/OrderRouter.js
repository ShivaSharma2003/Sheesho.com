const express = require("express");
const router = express.Router();
const { Protect } = require("../Middleware/Protect");
const PlaceOrder = require('../Controller/OrderController');

router.route('/placeorder').post(Protect , PlaceOrder)

module.exports = router