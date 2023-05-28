module.exports = (app) => {
  const teams = require("../controllers/teamControllers");

  var router = require("express").Router();

  // create team
  router.post("/", teams.create);

  // retrive all teams
  router.get("/", teams.findAll);

  app.use("/api/teams", router);
};
