const db = require("../model");
const Team = db.team;

// create and save team
exports.create = (req, res) => {
  if (!req.body.teamname) {
    res.status(400).send({ message: "Content cannot be with out team name" });
    return;
  }

  // create Team
  const team = new Team({
    teamname: req.body.teamname,
    playername: req.body.playername,
    score: req.body.score,
  });

  // save this team in database
  team
    .save(team)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "some error occuried  while creating the Team",
      });
    });
};

// retrive all teams
exports.findAll = (req, res) => {
  const team = req.query.teamname;

  var condition = team
    ? { team: { $regex: new RegExp(team), $options: "i" } }
    : {};

  Team.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "some error occuried while retriving the Team data",
      });
    });
};
