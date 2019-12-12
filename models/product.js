const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    uniquie: true
  },
  orders: { type: Schema.Types.ObjectId, ref: "Order" },
  amount: Number
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
