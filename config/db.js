require("dotenv").config();
const mongoose = require("mongoose");
const MONGODB_URI =
  process.env.MONGODB_URI || `mongodb://localhost:27017/olshop_db`;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const db = mongoose.connection;

module.exports = db;
