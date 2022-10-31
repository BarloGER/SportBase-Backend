const express = require("express");
const cors = require("cors");
const app = express();
//const jwt = require("jsonwebtoken");

const PORT = process.env.PORT || 8080;
const userRouter = require("./routes/user");
const teamRouter = require("./routes/team");
const eventRouter = require("./routes/event");
const db = require("./db");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
db();
app.disable("etag");
// STARTSEITE
app.get("/", (req, res) => {
  res.send("Willkommen zu unserem Abschlussprojekt");
});
// GET ALL Users && CREATE USER && HOPEFULLY LOGINUSER
app.use("/user", userRouter);

// CHECK LOGIN FORM
//app.use("/login", loginRouter);
// GET ALL TEAMS && CREATE TEAM
app.use("/team", teamRouter);

app.use("/event", eventRouter);
// LISTENING
app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
