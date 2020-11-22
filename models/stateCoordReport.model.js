const mongoose = require('mongoose');


stateCoordReportSchema = new mongoose.Schema({
    designation: {
        type: String,
    },
    stateCoordName: {
        type: String,
        required: 'State Coordinator\'s name cannot be empty'
    },
    stateCoordPhoneNumber: {
        type: String,
        required: 'State Coordinator\'s phone number cannot be empty'
    },
    stateCoordEmail: {
        type: String,
        required: 'State Coordinator\'s email cannot be empty',
        unique: true
    },
    stateCoordLocation: {
        type: String,
        required: 'State/Location point cannot be empty'
    },
    stateClusterPoints: {
        type: String,
        required: 'State cluster points file must be attached'
    },
    stateInstitutions: {
        type: String,
        required: 'Institutions in the state file must be attached'
    },
    stateParticipantsEmails: {
        type: String,
        required: 'All required fields must be filled'
    },
    stateParticipantsNamesAndPhones: {
        type: String,
        required: 'All fields must be filled'
    },
    totalStateParticipants: {
        type: String,
        required: 'All required fields must be filled'
    },
    totalStateCorperParticipants: {
        type: String,
        required: 'All required fields must be filled'
    },
    totalStateUndergraduateParticipants: {
        type: String,
        required: 'All required fields must be filled'
    },
    totalStatePostgraduateParticipants: {
        type: String,
        required: 'All required fields must be filled'
    },
    totalStateStaffParticipants: {
        type: String,
        required: 'All required fields must be filled'
    },
    stateMorningSessionStat: {
        type: String,
        required: 'All required fields must be filled'
    },
    stateAfternoonSessionStat: {
        type: String,
        required: 'All required fields must be filled'
    },
    dateOfStateReport: {
        type: Date
    }

});

//Are we doing any custom validation???
stateCoordReportSchema.path('stateCoordEmail').validate((val) => {
    emailRegex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return emailRegex.test(val);
}, 'Invalid State coord email');
stateCoordReportSchema.path('stateCoordPhoneNumber').validate((val) => {
    phoneNumberRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    return phoneNumberRegex.test(val);
}, 'Invalid Phone Number')
//Any pre-event??


mongoose.model('StateCoordReport', stateCoordReportSchema);