const express = require("express");
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
userRouter.route("/login").get(getSingleUser);

module.exports = userRouter;
