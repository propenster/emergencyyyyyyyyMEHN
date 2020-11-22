const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var ClusterReport = mongoose.model('ClusterReport', clusterReportSchema);
var path = require('path');

module.exports.clusterreport = (req, res, next) => {
    const clusterreport = new ClusterReport({
        designation : req.body.designation,
        officerName : req.body.officerName,
        officerPhone : req.body.officerPhone,
        officerEmail : req.body.officerEmail,
        officerLocation : req.body.officerLocation,
        participantsPhones : req.body.participantsPhones,
        participantsEmails : req.body.participantsEmails,
        participantsWhatsApp : req.body.participantsWhatsApp,
        morningSessionStat : req.body.morningSessionStat,
        afternoonSessionStat : req.body.afternoonSessionStat,
        clusterLocationPoint : req.body.clusterLocationPoint,
        participantsTestimonies : req.body.participantsTestimonies,
        totalNumberOfParticipants : req.body.totalNumberOfParticipants,
        numberOfCorperParticipants : req.body.numberOfCorperParticipants,
        numberOfUndergraduateParticipants : req.body.numberOfUndergraduateParticipants,
        numberOfPostgraduateParticipants : req.body.numberOfPostgraduateParticipants,
        numberOfStaffParticipants : req.body.numberOfStaffParticipants,
        challenges : req.body.challenges,
        suggestions : req.body.suggestions,
        decisionsForChrist : req.body.decisionsForChrist,
        dateOfReport : Date.now()
    });

    clusterreport.save((err, doc) => {
        if(!err){
            res.send(doc);
            console.log("Saved" + JSON.stringify(doc));
            console.log('Cluster Report saved successfully!');
        }else{
            console.log(err);
        }
    })
}

