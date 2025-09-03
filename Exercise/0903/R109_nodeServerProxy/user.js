var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {   // '/' 은  2차 주소
  res.send('respond with a resource');
});

module.exports = router;
