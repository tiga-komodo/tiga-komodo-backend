const env = process.env.NODE_ENV || "development";

const development = {
  app: {
    port: parseInt(process.env.PORT || "3001")
  },
  db: `mongodb://localhost:27017/olshop_db`
};

const production = {
  app: {
    port: parseInt(process.env.PORT || "3001")
  },
  db: process.env.MONGODB_URI
};

const config = {
  development,
  production
};

module.exports = config[env];
