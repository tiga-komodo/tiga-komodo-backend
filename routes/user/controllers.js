const mongoose = require("mongoose");
const User = require("../../models/user");

module.exports = {
  register: (req, res) => {
    User.create(req.body)
      .then(result =>
        res.send({
          message: "user created",
          result
        })
      )
      .catch(error =>
        res.send({
          message: "user failed to add",
          error: error.stack
        })
      );
  },

  updateUser: (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(result =>
        res.send({
          message: "user updated",
          result
        })
      )
      .catch(error =>
        res.send({
          message: "failed to update user",
          error: error.stack
        })
      );
  },

  login: (req, res) => {
    User.findOne({ email: req.body.email })
      .then(result => {
        if (result) {
          res.send({
            message: "login success",
            result
          });
        } else {
          throw new Error("user doesn't exist");
        }
      })
      .catch(error =>
        res.status(500).send({
          message: "error when login",
          error: error.message
        })
      );
  },

  getUser: (req, res) => {
    User.find()
      .then(result =>
        res.send({
          message: "User",
          result
        })
      )
      .catch(error =>
        res.send({
          message: "error when get user",
          error: error.stack
        })
      );
  }
};
