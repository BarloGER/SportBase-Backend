const mongoose = require("mongoose");
const { Schema } = mongoose;

const Event = new Schema({
  title: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  location: { type: String },
  opponent: { type: String },
  activePlayers: { type: Array },
  reservePlayers: { type: Array },
  lineUp: { type: String },
  eventImage: { type: String },
});
module.exports = mongoose.model("Event", Event);
