const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  users: [{ type: Schema.Types.ObjectId, ref: "User" }],
  products: [{ type: Schema.Types.ObjectId, ref: "Produc" }]
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
