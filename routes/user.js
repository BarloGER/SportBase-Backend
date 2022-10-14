const express = require("express");
const verifyToken = require("../midleware/auth");
//controllers
const {
  getAllUser,
  getSingleUser,
  createUser,
  loginUser,
  loginUser,
} = require("../controllers/user");

const userRouter = express.Router();
//GET ALL Users && create User
userRouter.route("/").get(getAllUser).post(createUser);
// GET SINGLE User BY MAIL && PW
userRouter.route("/login").post(loginUser);

userRouter.route("/checkToken").post(verifyToken, getSingleUser);
module.exports = userRouter;
