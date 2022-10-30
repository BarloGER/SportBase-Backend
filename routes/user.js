const express = require("express");
const jwtToken = require("../midleware/auth");
//controllers
const {
  getAllUser,
  getSingleUser,
  createUser,
  loginUser,
  deleteUser,
} = require("../controllers/user");

const userRouter = express.Router();
//GET ALL Users && create User
userRouter.route("/").get(getAllUser).post(createUser);
// GET SINGLE User BY MAIL && PW
userRouter.route("/login").post(loginUser);

// DELTE USER
// userRouter.route("/:id").delete(deleteUser);

userRouter.route("/checkToken").get(jwtToken, getSingleUser);
module.exports = userRouter;
