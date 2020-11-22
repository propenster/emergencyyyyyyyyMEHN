const mongoose = require('mongoose');

clusterReportSchema = new mongoose.Schema({
    designation: {
        type: String
    },
    officerName: {
        type: String
    },
    officerPhone: {
        type: String
    },
    officerEmail: {
        type: String
    },
    officerLocation: {
        type: String
    },
    
    participantsPhones: {
        type: String
    },
    participantsEmails: {
        type: String
    },
    participantsWhatsApp: {
        type: String
    },
    morningSessionStat: {
        type: String
    },
    afternoonSessionStat: {
        type: String
    },
    clusterLocationPoint: {
        type: String
    },
    participantsTestimonies: {
        type: String
    },
    totalNumberOfParticipants: {
        type: String
    },
    numberOfCorperParticipants: {
        type: String
    },
    numberOfUndergraduateParticipants: {
        type: String
    },
    numberOfPostgraduateParticipants: {
        type: String
    },
    numberOfStaffParticipants: {
        type: String
    },
    challenges: {
        type: String
    },
    suggestions: {
        type: String
    },
    decisionsForChrist: {
        type: String
    },
    dateOfReport: {
        type: Date
    }
       
});

clusterReportSchema.path('officerEmail').validate((val) =>{
    emailRegex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return emailRegex.test(val);
}, 'Invalid officer email');

clusterReportSchema.path('officerPhone').validate((val) => {
    phoneNumberRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    return phoneNumberRegex.test(val);
}, 'Invalid Phone Number')

mongoose.model('ClusterReport', clusterReportSchema);