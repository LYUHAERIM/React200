var express = require('express');
var app = express();


// http://localhost:5000/users
app.use('/users', require('./routes/users'));
app.get('/tiger', function (req, res) {
    // select
    console.log(1);
    res.send('get ok');
});
app.post('/tiger', function (req, res) {
    // select
    console.log(2);
    res.send('post ok');
});
app.use(
    '/tiger01',
    (req, res, next) => {
        console.log(3);
        //res.send('tiger01');
    },
    (req, res) => {
        console.log(4);
        res.send('tiger01');
    },

);

app.use(
    '/tiger02',
    (req, res, next) => {
        console.log(3, req.query.valueKey);
        if (req.query.valueKey == 1) {
            res.send('tiger02-1')
        } else {
            next();
        }
        //res.send('tiger02-1');
    },
    (req, res) => {
        console.log(4);
        res.send('tiger02-2'); ``
    },

);

var router = express.Router();

app.use('/tiger03',
    router.get('/baby1', function (req, res, next) {
        console.log('baby1');
        res.send('호랑이 baby1');
    }),
    router.get('/baby2', function (req, res, next) {
        console.log('baby2');
        res.send('호랑이 baby2');
    })
);

var port = process.env.PORT || '5000';
app.listen(port, () => { console.log('listen'); });
module.exports = app;