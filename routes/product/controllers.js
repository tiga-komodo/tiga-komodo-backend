const Order = require("../../models/order");
const Product = require("../../models/product");

module.exports = {
  addProducts: async (req, res) => {
    try {
      const newBody = req.body;
      const product = await Product.create(newBody);
      if (product) {
        res.status(200).send({
          message: "product created",
          product
        });
      } else {
        res.status(400).send({
          message: "failed create product"
        });
      }
    } catch (error) {
      res.status(400).send({
        message: "something error when create product",
        error: error.message
      });
    }
  },
  getAll: (req, res) => {
    Product.find()
      .populate({
        populate: [
          {
            path: "users",
            select: "name email -_id"
          }
        ]
      })
      .then(result => res.send(result))
      .catch(error => res.send(error));
  }
};
