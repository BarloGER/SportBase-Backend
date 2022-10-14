const express = require("express");
const jwtToken = require("../midleware/auth");
//controllers
const {
  getAllUser,
  getSingleUser,
  createUser,
  loginUser,
} = require("../controllers/user");

const userRouter = express.Router();
//GET ALL Users && create User
userRouter.route("/").get(getAllUser).post(createUser);
// GET SINGLE User BY MAIL && PW
userRouter.route("/login").post(loginUser);

userRouter.route("/checkToken").post(jwtToken, getSingleUser);
module.exports = userRouter;
