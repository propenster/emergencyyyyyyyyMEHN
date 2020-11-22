require('./config/config');
require('./models/db');

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const ejs = require('ejs')
const multer = require('multer')

// models
const Participant = require('./models/Participant')
const ClusterReport = require('./models/ClusterReport')
const StateCoordReport = require('./models/StateCoordReport')

const app = new express();

app.set('view engine', 'ejs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, 'uploads'))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() +
            "." + file.originalname.split('.').pop())
    }
})

var upload = multer({ storage: storage })

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/cluster-reports', (req, res) => {
    res.render('cluster-reports')
});

app.get('/state-coord-reports', (req, res) => {
    res.render('state-coord-reports')
});

var fileUploads = upload.fields([{ name: "participantsPhones", maxCount: 1 }, { name: "participantsEmails", maxCount: 1 }, { name: "participantsWhatsApp", maxCount: 1 }, { name: "morningSessionStat", maxCount: 1 }, { name: "afternoonSessionStat", maxCount: 1 }, { name: "participantsTestimonies", maxCount: 1 }, { name: "decisionsForChrist", maxCount: 1 }])
app.post('/cluster-reports', fileUploads, (req, res, next) => {
    console.log(req.files)
    console.log(req.body)
    // await ClusterReport.create({
    //     ...req.body,
    //     participantsEmails: req.files['participantsEmails'][0].path,
    //     participantsPhones: req.files['participantsPhones'][0].path,
    //     participantsWhatsApp: req.files['participantsWhatsApp'][0].path,
    //     participantsTestimonies: req.files['participantsTestimonies'][0].path,
    //     morningSessionStat: req.files['morningSessionStat'][0].path,
    //     afternoonSessionStat: req.files['afternoonSessionStat'][0].path,
    //     decisionsForChrist: req.files['decisionsForChrist'][0].path,
    // })

    res.redirect('/cluster-reports');
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