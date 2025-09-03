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
    // insert
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

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/tiger04', function (req, res) {
    console.log('tiger04');
    console.log(req.body, req.body.name, req.body.age);
    res.send('tiger04');
});

// param 전송, 쿼리 전송, 객체 전송
app.post('/tiger05/:fruit', function (req, res) {
    console.log('tiger05', req.params.fruit);
    res.send('tiger05');
});

// 1, mysql, npm install mysql2
// 2. mysql2 임포트
// 3. Route 작성

const mysql2 = require('mysql2');
const con = mysql2.createConnection({
    host: 'localhost',
    port: '3306',
    database: 'db01',
    user: 'root',
    password: '1234',
});

app.get('/tiger06', (req, res) => {
    console.log('tiger06');
    try {
        con.query(
            'select * from table01',
            (error, rows, fields) => {
                if (error)
                    throw error;

                console.log(rows);
                res.send(rows);
            }
        );
    } catch (error) {
        console.log(error);
    }
});


var port = process.env.PORT || '5000';
app.listen(port, () => { console.log('listen'); });
module.exports = app;