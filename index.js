const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const bluebird = require('bluebird');

const app = express();

// connect to mongo db
// mongoose.Promise = require('bluebird');
// mongoose.connect(configDB.url, {
//     useMongoClient: true,
//     promiseLibrary: require('bluebird'),
// });
mongoose.connect('mongodb://localhost/ninjago', {
    useMongoClient: true,
    promiseLibrary: require('bluebird'),
});

app.use(bodyParser.json());



// Initialize routes.
app.use('/api', require('./routes/api'));
var port = 4000;


app.listen(process.env.port || 4000, function() {
    console.log('App listening on port '+ port);
});