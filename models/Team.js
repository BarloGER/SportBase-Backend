const mongoose = require("mongoose");
const { Schema } = mongoose;

const Team = new Schema({
  team: { type: String, required: true },
  sport: { type: String, required: true },
  trainer: { type: Object, required: true },
  memberCount: { type: Number, required: true },
  member: { type: Array, required: true },
  isActive: { type: Boolean, default: true },
  logoUrl: { type: String },
});
module.exports = mongoose.model("Team", Team);
