const mongoose = require("mongoose");
const { Schema } = mongoose;

const User = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true, select: false },
  terms: { type: Boolean, required: true },
  height: { type: Number, default: null },
  coach: { type: Boolean, default: false },
  player: { type: Boolean, default: true },
  betreuer: { type: Boolean, default: false },
  activePlayer: { type: Boolean, default: false },
  age: { type: Number, default: null },
  team: { type: String, default: null },
  position: { type: String, default: null },
  number: { type: Number, deafult: null },
  inactive: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("User", User);
