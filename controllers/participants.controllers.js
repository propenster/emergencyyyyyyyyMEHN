//define a function for user reg or signup 
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var Participant = mongoose.model('Participant', participantSchema);
var path = require('path');


module.exports.register = (req, res, next) =>{
    //console.log('inside the register function');

    const participant = new Participant({
        fullName : req.body.fullName,
        phoneNumber : req.body.phoneNumber,
        email : req.body.email,
        whatsappNumber : req.body.whatsappNumber,
        institution : req.body.institution,
        country : req.body.country,
        state : req.body.state,
        town : req.body.town,
        homeAddress : req.body.homeAddress,
        decision : req.body.decision,
        testimony : req.body.testimony,
        gender : req.body.gender,
        participantCategory : req.body.participantCategory,
        challenges : req.body.challenges,
        suggestions : req.body.suggestions,
        dateRegistered : Date.now()
    });

    // participant.fullName = req.body.fullName;
    // participant.phoneNumber = req.body.phoneNumber;
    // participant.email = req.body.email;
    // participant.whatsappNumber = req.body.whatsappNumber;
    // participant.institution = req.body.institution;
    // participant.country = req.body.country;
    // participant.state = req.body.state;
    // participant.town = req.body.town;
    // participant.homeAddress = req.body.homeAddress;
    // participant.decision = req.body.decision;
    // participant.testimony = req.body.testimony;
    // participant.gender = req.body.gender;
    // participant.participantCategory = req.body.participantCategory;
    // participant.challenges = req.body.challenges;
    // participant.suggestions = req.body.suggestions;


    participant.save((err, doc) =>{
        if(!err){
            res.send(doc);
            console.log("Saved" + JSON.stringify(doc));
            console.log("Record inserted Successfully");
        }else{
            console.log(err);
        }
        //console.log(err);
    });
} 
