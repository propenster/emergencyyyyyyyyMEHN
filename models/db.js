const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true},(err) => {
    if(!err)
    {
        console.log('MongoDB connection succeeded.');
    }
    else
    {
        console.log('Error in MongoDB Connection : ' + JSON.stringify(err, undefined, 2));
    }
});

require('./participant.model');
require('./clusterReport.model');
require('./stateCoordReport.model');