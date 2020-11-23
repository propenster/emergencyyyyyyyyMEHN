const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParticipantSchema = new Schema({
    fullName: {
        type: String,
        required: 'First Name must not be empty'

    },
    phoneNumber: {
        type: String,
        required: 'Phone Number cannot be empty'
    },
    email: {
        type: String,
        required: 'Email cannot be empty',
        unique: true
    },
    whatsappNumber: {
        type: String,
        required: 'WhatsApp number cannot be empty'
    },
    institution: {
        type: String,
        required: 'This field is required'
    },
    country: {
        type: String,
        required: 'Country is required'
    },
    state: {
        type: String,
        required: 'State is required'
    },
    town: {
        type: String,
        required: 'Town or City is required'
    },
    homeAddress: {
        type: String,
        required: 'Address Field is required'
    },
    decision: {
        type: String,
        required: 'Decision for CHrist is required'
    },
    testimony: {
        type: String
    },
    gender: {
        type: String
    },
    participantCategory: {
        type: String
    },
    challenges: {
        type: String
    },
    suggestions: {
        type: String
    },
    dateRegistered: {
        type: Date
    }
});

//any custom validation
//Custom Validation for email
ParticipantSchema.path('email').validate((val) => {
    emailRegex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return emailRegex.test(val);
}, 'Invalid email');
ParticipantSchema.path('phoneNumber').validate((val) => {
    phoneNumberRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    return phoneNumberRegex.test(val);
}, 'Invalid phone number');
// any pre save event

const Participant = mongoose.model('Participant', ParticipantSchema);

module.exports = Participant