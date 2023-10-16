var express = require('express');
var router = express.Router();
const bookingController = require('../controllers/bookingController.js');

//Get
router.get('/', bookingController.getBooking);

module.exports = router;
