const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

require('./config/mongoose.config');

const JokeRoutes = require('./routes/jokes.routes');
JokeRoutes(app);

app.listen(8000, () =>
console.log("You have successfully connected to port 8000")
);