const express = require("express");
//controllers
const {
  getAllTeams,
  getSingleTeam,
  createTeam,
  updateTeam,
  deleteTeam,
} = require("../controllers/team");

const teamRouter = express.Router();
//GET ALL Teams && create Team
teamRouter.route("/").get(getAllTeams).post(createTeam);
// GET SINGLE Team BY ID
teamRouter.route("/:id").get(getSingleTeam).put(updateTeam).delete(deleteTeam);

module.exports = teamRouter;
