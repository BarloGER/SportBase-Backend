const mongoose = require("mongoose");
const { Schema } = mongoose;

const Team = new Schema({
  team: { type: String, required: true },
  sport: { type: String, required: true },
  trainer: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  logoUrl: { type: String },
});
module.exports = mongoose.model("Team", Team);
