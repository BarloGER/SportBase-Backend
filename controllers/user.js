const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

// CREATE USER
const createUser = async (req, res) => {
  const {
    firstname,
    lastname,
    username,
    email,
    password,
    terms,
    createdAt,
    height,
    weight,
    age,
    team,
    position,
    number,
    inactive,
    aboutMe,
    userImage,
  } = req.body;
  console.log(req.body);
  try {
    const found = await User.findOne({ email });
    if (found) return res.status(400).send("User already exists");
    const hash = await bcrypt.hash(password, 5);
    const { _id } = await User.create({
      firstname,
      lastname,
      username,
      email,
      password: hash,
      terms,
      createdAt,
      height,
      weight,
      age,
      team,
      position,
      number,
      inactive,
      aboutMe,
      userImage,
    });
    const token = jwt.sign({ _id }, process.env.JWT_SECRET);
    return res.status(201).json(token);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// User BY MAIL && PW
const loginUser = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email }).select("+password");
    if (!user) return res.send("Bitte zuerst registrieren");
    const pass = await bcrypt.compare(req.body.password, user.password);
    if (!pass) return res.send("passwort ist falsch");
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    return res.json({ token });
    //res.status(200).json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getSingleUser = async (req, res) => {
  try {
    const { userId } = req;
    const user = await User.findById(userId);
    if (!user) return res.send("User not found");
    return res.json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// const findUser = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const founduser = await User.findById(id);
//     if (!founduser) return res.send("User not found");
//     return res.json(founduser);
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// };

// DELETE USER
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    res.status(200).send("User wurde erfolgreich gelöscht");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateUser = async (req, res) => {
  console.log("Req Body", req.body);
  console.log("req.params", req.params);
  try {
    const { id } = req.params;
    const {
      firstname,
      lastname,
      username,
      email,
      terms,
      createdAt,
      height,
      weight,
      age,
      team,
      position,
      number,
      inactive,
      aboutMe,
      userImage,
    } = req.body;
    const updatedUser = await User.findByIdAndUpdate(id, {
      firstname,
      lastname,
      username,
      email,
      terms,
      createdAt,
      height,
      weight,
      age,
      team,
      position,
      number,
      inactive,
      aboutMe,
      userImage,
    });
    const refreshedUser = await User.findById(id);
    res.status(200).json(refreshedUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllUser,
  getSingleUser,
  createUser,
  loginUser,
  deleteUser,
  updateUser,
  // findUser,
};
