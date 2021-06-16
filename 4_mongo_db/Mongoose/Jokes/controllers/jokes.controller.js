const Joke = require('../models/jokes.model');

module.exports.allJokes = (req, res) => {
    Joke.find()
        .then((jokesArray) => {
            console.log("We got all jokes!")
            res.json({
                message: "success",
                results: jokesArray
            });
        })
        .catch((err) => {
            res.json({
                message:"error",
                error:err
            })
        })
}

module.exports.getOneJoke = (req, res) => {
    Joke.findById(req.params.id)
        .then((singleJoke) => {
            res.json(singleJoke);
        })
        .catch((err) => {
            res.json({
                message: "error",
                error:err
            })
        })
}

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => {
            res.json(newJoke);
        })
        .catch((err) => {
            res.json({
                message: "error",
                error:err
            })
        })
}

module.exports.updateJoke = (req, res) => {
    Joke.findByIdAndUpdate(req.params.id, req.body, {new:true})
        .then((updatedJoke) => {
            res.json(updatedJoke);
        })
        .catch((err) => {
            res.json({
                message:"error",
                error:err
            })            
        })
}

module.exports.deleteJoke = (req, res) => {
    Joke.findByIdAndDelete(req.params.id)
        .then((deletedJoke) => {
            res.json(deletedJoke);
        })
        .catch((err) => {
            res.json({
                message: "error",
                error:err
            })
        })
}