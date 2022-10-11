const mongoose = require("mongoose");
const { Schema } = mongoose;

const Team = new Schema({
  team: { type: String, required: true },
  sport: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true },
});
module.exports = mongoose.model("Team", Team);
