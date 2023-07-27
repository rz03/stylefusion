const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  title: "String",
  firstName: "String",
  lastName: "String",
  email: "String",
  password: "String",
  phone: "Number",
});

const userModel = mongoose.model("user", userSchema);

module.exports = { userModel };
