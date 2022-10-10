// ALL User
const User = require("../models/User");
const getAllUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
// User BY ID
const getSingleUser = async (req, res) => {
  const { id } = Number(req.params);
  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
// CREATE USER
const createUser = async (req, res) => {
  const {
    userName,
    email,
    password,
    createdAt,
    height,
    age,
    team,
    position,
    number,
    inactive,
  } = req.body;
  console.log(req.body);
  try {
    const found = await User.findOne({ email });
    if (found) return res.status(400).send("User already exists");
    const newUser = await User.create({
      userName,
      email,
      password,
      createdAt,
      height,
      age,
      team,
      position,
      number,
      inactive,
    });

    res.status(201).json(newUser);
    console.log(newUser);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
module.exports = { getAllUser, getSingleUser, createUser };
