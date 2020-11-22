require('./config/config');
require('./models/db');

const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const cors = require('cors');
app.use(cors());

// models
const Participant = require('./models/Participant')
const ClusterReport = require('./models/ClusterReport')
const StateCoordReport = require('./models/StateCoordReport')


var app = express();
var multer = require('multer');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/cluster-reports', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'cluster-reports.html'));
});

app.get('/state-coord-reports', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'state-coord-reports.html'));
});

app.post('/cluster-reports', (req, res) => {

})

app.post('/state-coord-reports', (req, res) => {

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