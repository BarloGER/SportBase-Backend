const mongoose = require("mongoose");
const { Schema } = mongoose;

const Team = new Schema({
  team: { type: String, required: true },
  sport: { type: String, required: true },
  trainer: { type: String },
  memberCount: { type: Number },
  member: { type: Array },
  isActive: { type: Boolean, default: true },
  logoUrl: { type: String },
});
module.exports = mongoose.model("Team", Team);
