const express = require("express");
//controllers
const {
  getAllTeams,
  getSingleTeam,
  createTeam,
} = require("../controllers/team");

const teamRouter = express.Router();
//GET ALL Teams && create Team
teamRouter.route("/").get(getAllTeams).post(createTeam);
// GET SINGLE Team BY ID
teamRouter.route("/:id").get(getSingleTeam);

module.exports = teamRouter;
