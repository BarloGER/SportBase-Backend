const express = require("express");
const verifyToken = require("../midleware/auth");
//controllers
const {
  getAllUser,
  getSingleUser,
  createUser,
} = require("../controllers/user");

const userRouter = express.Router();
//GET ALL Users && create User
userRouter.route("/").get(getAllUser).post(createUser);
// GET SINGLE User BY MAIL && PW
userRouter.route("/login").post(getSingleUser, verifyToken);

module.exports = userRouter;
