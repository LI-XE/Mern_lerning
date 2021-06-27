const Player = require('../models/player.model');

// get all players
module.exports.getAllPlayers = (req, res) => {
    console.log("Inside getAllPlayers");

    Player.find( { } )  // find all team documents
        .then((allPlayers) => {
            console.log(allPlayers);
            res.json(allPlayers);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        })
};
// get one player
module.exports.getOnePlayer = (req, res) => {
    console.log("inside getOnePlayer");
    console.log(req.params.id);

    Player.findById(req.params.id)
    .then((onePlayer) => {
        console.log(onePlayer);
        res.json(onePlayer);
    })
    .catch((err) => {
        console.log(err);
        res.json(err);
    })
};

// create player
module.exports.createPlayer = (req, res) => {
    console.log("Inside createPlayer");
    console.log(req.body);

    Player.create(req.body)
        .then((newPlayer) => {
            console.log(newPlayer);
            res.json(newPlayer);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        })
}
// update player
module.exports.updatePlayer = (req, res) => {
	console.log("inside updatePlayer");
	console.log(req.params.id);  // the document we need to update
	console.log(req.body);       // the data we will be updating with

	// update by default will send back the ORIGINAL document....NOT the updated one!
	// Update will NOT validate your data by default
	Player.findByIdAndUpdate(req.params.id, req.body, {
		new: true,    // return the updated document instead of the original
		runValidators: true  // validate the json data just like the create
	})
		.then((updatedPlayer) => {
			console.log(updatedPlayer);
			res.json(updatedPlayer);
		})
		.catch((err) => {
			console.log(err);
			res.json(err);
		})
};
// delete player
module.exports.deletePlayer = (req, res) => {
    console.log("inside deletePlayer");
    console.log(req.params.id);

    Player.findByIdAndDelete(req.params.id)
    .then((deletedPlayer) => {
        console.log(deletedPlayer);
        res.json(deletedPlayer);
    })
    .catch((err) => {
        console.log(err);
        res.json(err);
    })
};