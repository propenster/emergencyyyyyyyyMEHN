require('./config/config');
require('./models/db');


const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
//all the routes in the app
const rtsIndex = require('./routes/index.router');

var app = express();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/cluster-reports', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'cluster-reports.html'));
});

app.get('/state-coord-reports', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'state-coord-reports.html'));
});

//global error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors);
    }
});

//start server
app.listen(process.env.PORT, () => console.log('Server started at port : ' + process.env.PORT));