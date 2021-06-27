const mongoose = require('mongoose');
const dbName = "teams-db";


mongoose.connect("mongodb://localhost/" + dbName, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log(`Established a connection to the "${dbName}" database`))
    .catch(err => console.log(`Something went wrong when connecting to the  "${dbName}" database`, err));

