const mongoose = require("mongoose");

const OrdersSchema = mongoose.Schema(
  {
    User: {
      type: mongoose.Schema.Types.ObjectId,
    },
    OrderItem: [
      {
        url: String,
        name: String,
        sub_title: String,
        brand: String,
        model: Number,
        color: String,
        price: Number,
        currency: String,
        availability: String,
        description: String,
        avg_rating: Number,
        review_count: Number,
        images: String,
        available_sizes: String,
        uniq_id: String,
        scraped_at: String,
      },
    ],
    BillerName: { type: String, required: true },
    MobileNumber: { type: String, required: true },
    HouseNumber: { type: String, required: true },
    StreetName: { type: String, required: true },
    Pincode: { type: String, required: true },
    City: { type: String, required: true },
    State: { type: String, required: true },
    Landmark: { type: String },
    PaymentMethod: { type: String, required: true },
    TotalPrice: { type: Number, required: true },
    TaxPrice: { type: Number, required: true },
    PackagingCharge: { type: Number, required: true },
    DeliveryCharge: { type: Number, required: true },
    Discount: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PlacedOrders", OrdersSchema);
