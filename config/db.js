require("dotenv").config();
const mongoose = require("mongoose");

const config = require("./nodeEnv");
const MONGODB_URI = config.db;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const db = mongoose.connection;

module.exports = db;
