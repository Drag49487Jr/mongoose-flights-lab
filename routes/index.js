var express = require('express');
var router = express.Router();
// var indexCtrl = require('../controllers/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Flights' });
});

module.exports = router;
