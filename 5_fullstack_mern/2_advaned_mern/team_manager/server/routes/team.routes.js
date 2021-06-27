const TeamController = require('../controllers/team.controller');

module.exports = function(app){
    // get all teams
    app.get("/api/teams", TeamController.getAllTeams);
    // get one team
    // create a param variable called "id"
    app.get("/api/teams/:id", TeamController.getOneTeam);
    // create team
    app.post("/api/teams/new", TeamController.createTeam);
    // update team
    // put and patch are all used for updating
    app.put("/api/teams/edit/:id", TeamController.updateTeam);
    // delete team
    app.delete("/api/teams/delete/:id", TeamController.deleteTeam);
}