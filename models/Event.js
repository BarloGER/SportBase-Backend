const mongoose = require("mongoose");
const { Schema } = mongoose;

const Event = new Schema({
  eventName: { type: String, required: true },
  date: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
  opponent: { type: String, default: "Gegner" },
});
module.exports = mongoose.model("Event", Event);
