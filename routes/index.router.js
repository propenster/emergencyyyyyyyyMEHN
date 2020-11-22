const express = require('express');
const router = express.Router();


//const pageController = require('../controllers/pages.controller');
const participantController = require('../controllers/participants.controllers');
const clusterReportController = require('../controllers/cluster-report.controller');
const stateCoordReportController = require('../controllers/state-coord-report.controller');
// router.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'index.html'));
// });
// router.get('/cluster-reports', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'cluster-reports.html'));
// });
// router.get('/state-coord-reports', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'state-coord-reports.html'));
// });

// router.get('/', participantController.index);
// router.get('/cluster-reports', pageController.clusterreport);
// router.get('/state-coord-reports', pageController.statecoordreports);
router.post('/register-participants', participantController.register);
router.post('/cluster-report', clusterReportController.clusterreport);
router.post('/state-coord-report', stateCoordReportController.statecoordreport);



module.exports = router;