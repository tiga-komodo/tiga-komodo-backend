const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
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
  },

  contactUs: (req, res) => {
    async function main() {
      let transporter = nodemailer.createTransport({
        service: "gmail",
        secure: false, // true for 465, false for other ports
        auth: {
          user: "tigakomodo@gmail.com", // generated ethereal user
          pass: "tigaKomodo11!" // generated ethereal password
        }
      });

      // send mail with defined transport object
      let info = await transporter.sendMail(
        {
          from: '"Tiga Komodo 👻" <tigakomodo@gmail.com>', // sender address
          to: req.body.email, // list of receivers
          subject: "Hello User", // Subject line
          html: `<b>Hello dari Tiga Komodo</b>
               <br />
               <p>Terima kasih sudah menghubungi kami. Kami akan membalas pesan anda segera mungkin</p>
               <br />
               <br />
               <b>Salam</b>
               <p>Timepiece.com</p>
        `
        },
        err => {
          if (err) {
            res.status(400).send({
              message: "email failed to send"
            });
          } else {
            res.status(200).send({
              message: "email sent"
            });
          }
        }
      );
    }

    main();
  }
};
