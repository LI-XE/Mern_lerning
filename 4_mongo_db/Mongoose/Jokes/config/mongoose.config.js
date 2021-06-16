const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jokes',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("We've established a connection to our database!"))
    .catch(err => console.log("Uh oh, we couldn't connect to the database for some reason ", err))