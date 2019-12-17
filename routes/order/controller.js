const Order = require("../../models/order");

module.exports = {
  getOrder: (req, res) => {
    Order.find({})
      .then(result => {
        res.send(result);
      })
      .catch(error => {
        res.send(error);
      });
  },

  addOrder: async (req, res) => {
    const {userId, productId, amount} = req.body
    Order.create({
      userId,
      productId,
      amount
    })
    .then(result => {
      res.send({
        message: "order created",
        result
      });
    })
    .catch(error => {
      res.send(error);
    })
  },

  deleteOrder: async (req, res) => {
    const existedOrder= await Order.findOne({_id: req.params.id})
    if (existedOrder) {
      Order.findOneAndDelete({
        _id: req.params.id
      }).then(result =>{
        res.send({
          message: "order deleted",
          result
        })
      }).catch(error =>{
        res.send(error.message)
      })
    }
  },
  updateOrder: async (req, res) => {
    const existedOrder= await Order.findOne({_id: req.params.id})
    if (existedOrder) {
      Order.findOneAndUpdate(
        {_id: req.params.id}, 
        {
          userId: req.body.userId,
          productId: req.body.productId
        }
      )
      .then(result =>{
        res.send({
          message: "update success",
          result
        })
      }).catch(error=>{
        res.send(error.message)
      })
    }
    }
  }