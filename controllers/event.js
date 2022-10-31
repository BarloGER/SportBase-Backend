// ALL EVENTS
const Event = require("../models/Event");
const getAllEvents = async (req, res) => {
  try {
    const event = await Event.find();
    res.status(200).json(event);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
// EVENT BY ID
const getSingleEvent = async (req, res) => {
  const { id } = req.params;
  try {
    const event = await Event.findById(id);
    res.status(200).json(event);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
// CREATE EVENT
const createEvent = async (req, res) => {
  console.log(req);
  const {
    title,
    startDate,
    location,
    endDate,
    opponent,
    activePlayers,
    reservePlayers,
    lineUp,
    eventImage,
  } = req.body;
  console.log(req.body);
  try {
    const found = await Event.findOne({ startDate });
    if (found) return res.status(400).send("Event Name already exists");
    const newEvent = await Event.create({
      title,
      startDate,
      location,
      endDate,
      opponent,
      activePlayers,
      reservePlayers,
      lineUp,
      eventImage,
    });

    res.status(201).json(newEvent);
    console.log(newEvent);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
module.exports = { getAllEvents, getSingleEvent, createEvent };
