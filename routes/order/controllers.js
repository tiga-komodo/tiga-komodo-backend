const User = require("../../models/user");
const Order = require("../../models/order");

module.exports = {
  addOrder: (req, res) => {
    try {
      const order = Order.create({ users: req.params.id });
      if (order) {
        const user = User.findByIdAndUpdate(
          { _id: req.params.id },
          { $push: { orders: order._id } },
          { new: true }
        );
        return res.status(201).json({
          messsage: `Order created ${user.name} now have order with id ${order.id}. Please add products`
        });
      } else {
        return res.status(409).json({
          message: `Order failed to create`,
          error: error.message
        });
      }
    } catch (error) {
      res.status(500).json({
        message: `Order route is error`,
        error: error.message
      });
    }
  },

  getOrder: (req, res) => {
    Order.find({})
      .populate("users")
      .then(result => res.send(result))
      .catch(error => res.send(error));
  }
};
