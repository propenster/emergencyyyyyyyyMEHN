
var path = require('path');

module.exports.index = (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
}

module.exports.clusterreport = (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'cluster-reports.html'));
}
module.exports.statecoordreports = (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'state-coord-reports.html'));
}

