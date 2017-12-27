const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// connect to mongo db
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;
app.use(bodyParser.json());



// Initialize routes.
app.use('/api', require('./routes/api'));
var port = 4000;


app.listen(process.env.port || 4000, function() {
    console.log('App listening on port '+ port);
});