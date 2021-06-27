const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name:{
        type: String,
        unique: true,
        required: [ true, "Name is required for Author"],
        minlength: [2, "Name must be atleast 3 characters long"],
    },
    position:{
        type: String,
    }
},{timestamps: true});

module.exports = mongoose.model("Player", PlayerSchema);
