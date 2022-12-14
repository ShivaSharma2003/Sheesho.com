const express = require("express");
const router = express.Router();
const {
  BookProductRouteController,
  FashionProductRouteController,
  GetFashionProductController
} = require("../Controller/ProductRouteController");

router.route("/book").get(BookProductRouteController);
router.route("/fashion").get(FashionProductRouteController);
router.route("/fashion/item/:id").get(GetFashionProductController);

module.exports = router;
