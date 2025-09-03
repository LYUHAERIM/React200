var express = require('express');
var app = express();


// http://localhost:5000/users
app.use('/users', require('./routes/users'));
app.get('/tiger', function (req, res) {
    // select
    console.log(2);
    res.send('get ok');
});
app.post('/tiger', (req, res) =>{
    // insert
    console.log(2);
    res.send('post ok');
});

var port = process.env.PORT || '5000';
app.listen(port, () => { console.log('listen'); });
module.exports = app;