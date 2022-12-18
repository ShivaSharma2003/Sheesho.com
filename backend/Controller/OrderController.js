const asynchandler = require("express-async-handler");
const OrdersModel = require("../Models/OrdersModel");

const PlaceOrder = asynchandler(async (req, res) => {
  try {
    const {
      OrderItem,
      MobileNumber,
      HouseNumber,
      StreetName,
      Pincode,
      City,
      State,
      Landmark,
      PaymentMethod,
      TotalPrice,
      TaxPrice,
      PackagingCharge,
      DeliveryCharge,
      Discount,
      BillerName,
      OrderModel,
    } = req.body;

    const Order = await OrdersModel.create({
      User: req.user._id,
      OrderItem : OrderItem,
      MobileNumber : MobileNumber,
      HouseNumber : HouseNumber,
      StreetName : StreetName,
      Pincode : Pincode,
      City : City,
      State : State,
      Landmark : Landmark,
      PaymentMethod : PaymentMethod,
      TotalPrice : TotalPrice,
      TaxPrice : TaxPrice,
      PackagingCharge : PackagingCharge,
      DeliveryCharge : DeliveryCharge,
      Discount : Discount,
      BillerName : BillerName,
      OrderModel : OrderModel,
    });

    if (Order) {
      res.status(200);
      res.json({ Order: Order });
    } else {
      res.status(501);
      res.send("internal server error");
    }
  } catch (error) {
    res.status(501);
    res.send('Internal Server Error');
  }
});

module.exports = PlaceOrder;
