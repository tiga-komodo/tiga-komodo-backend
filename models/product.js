const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: String,
  img: String,
  price: Number,
  company: String,
  info: String,
  inCart: {
    type: Boolean,
    required: false
  },
  count: Number,
  total: Number,
  orders: { type: Schema.Types.ObjectId, ref: "Order" },
  amount: Number
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
