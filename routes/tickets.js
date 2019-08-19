var express = require('express');
var router = express.Router();
var ticketCtrl = require('../controllers/tickets');

router.get('/tickets/new', ticketCtrl.new);


module.exports = router;