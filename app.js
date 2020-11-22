require('./config/config');
require('./models/db');

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const ejs = require('ejs')

// models
const Participant = require('./models/Participant')
const ClusterReport = require('./models/ClusterReport')
const StateCoordReport = require('./models/StateCoordReport')

const app = new express();

app.set('view engine', 'ejs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/tmp/my-uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/cluster-reports', (req, res) => {
    res.render('cluster-reports')
});

app.get('/state-coord-reports', (req, res) => {
    res.render('state-coord-reports')
});

app.post('/cluster-reports', async (req, res) => {
    const clusterreport = new ClusterReport({
        designation: req.body.designation,
        officerName: req.body.officerName,
        officerPhone: req.body.officerPhone,
        officerEmail: req.body.officerEmail,
        officerLocation: req.body.officerLocation,
        participantsPhones: req.body.participantsPhones,
        participantsEmails: req.body.participantsEmails,
        participantsWhatsApp: req.body.participantsWhatsApp,
        morningSessionStat: req.body.morningSessionStat,
        afternoonSessionStat: req.body.afternoonSessionStat,
        clusterLocationPoint: req.body.clusterLocationPoint,
        participantsTestimonies: req.body.participantsTestimonies,
        totalNumberOfParticipants: req.body.totalNumberOfParticipants,
        numberOfCorperParticipants: req.body.numberOfCorperParticipants,
        numberOfUndergraduateParticipants: req.body.numberOfUndergraduateParticipants,
        numberOfPostgraduateParticipants: req.body.numberOfPostgraduateParticipants,
        numberOfStaffParticipants: req.body.numberOfStaffParticipants,
        challenges: req.body.challenges,
        suggestions: req.body.suggestions,
        decisionsForChrist: req.body.decisionsForChrist,
        dateOfReport: Date.now()
    });
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