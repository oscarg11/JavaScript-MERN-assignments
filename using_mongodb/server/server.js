const express = require('express');

const app = express();
const port = 8000;

require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({extended:true }));

//shorthand
require('./routes/student.routes')(app);

//or
// const StudentRoutes = require('./routes/student.routes');
// StudentRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));