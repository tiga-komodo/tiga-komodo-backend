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
        path: "orders",
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

// const newBody = req.body.products.map(data => {
//   return { ...data, orders: [].concat(req.params.id) };
// });
// const products = await Product.insertMany(newBody);

// if (products) {
//   const productsId = products.map(product => product._id);
//   const order = await Order.findByIdAndUpdate(
//     { _id: req.params.id },
//     { $push: { products: productsId } }
//   );
//   console.log(order);

//   return res.status(201).send({
//     message: `Order: ${order._id}, with all ${JSON.stringify(
//       products
//     )} are created`
//   });
// } else {
//   return res.status(409).send({
//     message: `Product: failed to create`
//   });
// }
