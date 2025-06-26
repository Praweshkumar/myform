const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  email: {
    type: "string",
    require: "true",
  },
  password: {
    type: "string",
    require: "true",
    unique: "true",
  },
});

module.exports = mongoose.model("user", userSchema);
