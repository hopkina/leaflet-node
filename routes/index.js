var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { 
        title: 'ANCIENT WOODLAND: Oxfordshire',
        lat: 51.755,
        lng: -1.225,
        zoom: 12
    });
});

module.exports = router;
