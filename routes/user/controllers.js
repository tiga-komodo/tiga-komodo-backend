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
    User.findById({ _id: req.params.id })
      .then(result =>
        res.send({
          message: "user with the ID",
          result
        })
      )
      .catch(error =>
        res.send({
          message: "error when get user ID",
          error: error.stack
        })
      );
  }
};
