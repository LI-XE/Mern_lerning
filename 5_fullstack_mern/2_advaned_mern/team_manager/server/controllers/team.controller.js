const Team = require('../models/team.model');

// get all teams
module.exports.getAllTeams = (req, res) => {
    console.log("Inside getAllTeams");

    Team.find( { } )  // find all team documents
        .then((allTeams) => {
            console.log(allTeams);
            res.json(allTeams);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        })
};
// get one team
module.exports.getOneTeam = (req, res) => {
    console.log("inside getOneTeam");
    console.log(req.params.id);

    Team.findById(req.params.id)
    .then((oneTeam) => {
        console.log(oneTeam);
        res.json(oneTeam);
    })
    .catch((err) => {
        console.log(err);
        res.json(err);
    })
};

// create team
module.exports.createTeam = (req, res) => {
    console.log("Inside createTeam");
    console.log(req.body);

    Team.create(req.body)
        .then((newTeam) => {
            console.log(newTeam);
            res.json(newTeam);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        })
}
// update team
module.exports.updateTeam = (req, res) => {
	console.log("inside updateTeam");
	console.log(req.params.id);  // the document we need to update
	console.log(req.body);       // the data we will be updating with

	// update by default will send back the ORIGINAL document....NOT the updated one!
	// Update will NOT validate your data by default
	Team.findByIdAndUpdate(req.params.id, req.body, {
		new: true,    // return the updated document instead of the original
		runValidators: true  // validate the json data just like the create
	})
		.then((updatedTeam) => {
			console.log(updatedTeam);
			res.json(updatedTeam);
		})
		.catch((err) => {
			console.log(err);
			res.json(err);
		})
};
// delete team
module.exports.deleteTeam = (req, res) => {
    console.log("inside deleteTeam");
    console.log(req.params.id);

    Team.findByIdAndDelete(req.params.id)
    .then((deletedTeam) => {
        console.log(deletedTeam);
        res.json(deletedTeam);
    })
    .catch((err) => {
        console.log(err);
        res.json(err);
    })
};