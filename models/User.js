const mongoose = require("mongoose");
const { Schema } = mongoose;

const User = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  height: { type: Number, default: null },
  age: { type: Number, default: null },
  team: { type: String, default: null },
  position: { type: String, default: null },
  number: { type: Number, deafult: null },
  inactive: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("User", User);
