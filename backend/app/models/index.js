const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.url =
  process.env.MONGO_URL || "mongodb://localhost:27017/discover_dollar_db";

db.tutorial = require("./tutorial.model")(mongoose);

module.exports = db;