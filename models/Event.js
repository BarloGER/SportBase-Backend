const mongoose = require("mongoose");
const { Schema } = mongoose;

const Event = new Schema({
  title: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
  opponent: { type: String, default: "Looser" },
});
module.exports = mongoose.model("Event", Event);
