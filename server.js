const express = require('express');

const app = express();
const path = require('path');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');

//var dbConn = mongoose.connect('mongodb://localhost:27017/premier-db', {useNewUrlParser: true});
const PORT = 8000;

//Data parsing...
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(express.static(path.resolve((__dirname, 'views'))));

// app.post('/register-participants', (req, res) => {

// });


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


app.listen(PORT, () => {
    console.log('Server started at PORT', PORT);
});