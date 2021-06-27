const PlayerController = require('../controllers/player.controller');

module.exports = function(app){
    // get all players
    app.get("/api/players", PlayerController.getAllPlayers);
    // get one player
    // create a param variable called "id"
    app.get("/api/players/:id", PlayerController.getOnePlayer);
    // create player
    app.post("/api/players/new", PlayerController.createPlayer);
    // update player
    // put and patch are all used for updating
    app.put("/api/players/edit/:id", PlayerController.updatePlayer);
    // delete player
    app.delete("/api/players/delete/:id", PlayerController.deletePlayer);
}