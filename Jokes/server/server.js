const express = require('express')
const app = express();

require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({ extended: true }));

const allMyJokeRoutes = require('./routes/jokes.routes');
allMyJokeRoutes(app);

app.listen(8000, () => console.log('The server is ready on port 8000'));