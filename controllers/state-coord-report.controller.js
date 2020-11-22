const mongoose = require('mongoose');
var express = require('express');
//I WAS Trying to Implement the File Upload Functionality in the COntrollers before...
//var formidable = require('formidable');
//var fs = require('fs');
//var multer = require('multer');

// SET MULTER STORAGE
// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now())
//     }
//   })

mongoose.Promise = global.Promise;
var StateCoordReport = mongoose.model('StateCoordReport', stateCoordReportSchema);
   
//   var upload = multer({ storage: storage })
module.exports.statecoordreport = (req, res, next) => {

    const statecoordreport = new StateCoordReport({
        designation : req.body.designation,
        stateCoordName: req.body.stateCoordName,
        stateCoordPhoneNumber : req.body.stateCoordPhoneNumber,
        stateCoordEmail : req.body.stateCoordEmail,
        stateCoordLocation : req.body.stateCoordLocation,
        stateClusterPoints : req.body.stateClusterPoints,
        stateInstitutions : req.body.stateInstitutions,
        stateParticipantsEmails : req.body.stateParticipantsEmails,
        stateParticipantsNamesAndPhones : req.body.stateParticipantsNamesAndPhones,
        totalStateParticipants : req.body.totalStateParticipants,
        totalStateCorperParticipants : req.body.totalStateCorperParticipants,
        totalStateUndergraduateParticipants : req.body.totalStateUndergraduateParticipants,
        totalStatePostgraduateParticipants : req.body.totalStatePostgraduateParticipants,
        totalStateStaffParticipants : req.body.totalStateStaffParticipants,
        stateMorningSessionStat : req.body.stateMorningSessionStat,
        stateAfternoonSessionStat : req.body.stateAfternoonSessionStat,
        dateOfStateReport : Date.now()
    });

    const file = req.stateParticipantsEmails;
    
    statecoordreport.save((err, doc)=>{
        if(!err){
            
            //I know this is bad habit for non-api
            //we'll remove this at production
            res.send(doc);
            console.log("Saved" + JSON.stringify(doc));
            console.log('State Report saved successfully!');

            // var formData = new formidable.IncomingForm();
            // formData.parse(req, function(error, fields, files){
            //     var extension = files.file.name.substr(files.file.name.lastIndexOf("."));
            //     var newPath = "uploads/" + fields.stateParticipantsEmails + extension;
            //     fs.rename(files.file.path, newPath, function(errorRename){
            //         res.send("File saved : " + newPath);
            //     })
            // })

        }else{
            console.log(err);
        }
    })

}