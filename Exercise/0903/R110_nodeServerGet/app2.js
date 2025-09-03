var express = require('express');
var app = express();


// http://localhost:5000/users
app.use('/users', require('./routes/users'));
app.get('/tiger', function (req, res) {
    // select
    console.log(2);
    res.send('get ok');
});
app.post('/tiger', function (req, res) {
    // select
    console.log(2);
    res.send('post ok');
});
app.use(
    '/tiger01',
    (req, res) => {
        console.log(3);
        res.send('tiger01');
    },
    (req, res) => {
        console.log(4);
        res.send('tiger01');
    },

);

var port = process.env.PORT || '5000';
app.listen(port, () => { console.log('listen'); });
module.exports = app;
