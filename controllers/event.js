// ALL EVENTS
const Event = require("../models/event");
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
  const { id } = Number(req.params);
  try {
    const event = await Event.findById(id);
    res.status(200).json(event);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
// CREATE EVENT
const createEvent = async (req, res) => {
  const { eventName, date, createdAt, oppenent } = req.body;
  console.log(req.body);
  try {
    const found = await Event.findOne({ eventName });
    if (found) return res.status(400).send("Team Name already exists");
    const newEvent = await Event.create({
      eventName,
      date,
      createdAt,
      oppenent,
    });

    res.status(201).json(newEvent);
    console.log(newEvent);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
module.exports = { getAllEvents, getSingleEvent, createEvent };
