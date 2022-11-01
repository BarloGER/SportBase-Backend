const express = require("express");
const jwtToken = require("../midleware/auth");
//controllers
const {
  getAllUser,
  getSingleUser,
  createUser,
  loginUser,
  deleteUser,
  updateUser,
} = require("../controllers/user");

const userRouter = express.Router();
//GET ALL Users && create User
userRouter.route("/").get(getAllUser).post(createUser);
// GET SINGLE User BY MAIL && PW
userRouter.route("/login").post(loginUser);

// DELTE USER

userRouter.route("/:id").delete(deleteUser).put(updateUser).get(getSingleUser);

userRouter.route("/checkToken").get(jwtToken, getSingleUser);
module.exports = userRouter;
