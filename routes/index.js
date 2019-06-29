var express = require('express');
var router = express.Router();
var request = require('request');


var iconv  = require('iconv-lite');

const API_URL = "http://portal.moskvorechie.ru/portal.api";
const LOGIN = "soundon";
const PASS = "C96BX2cgka8uJfHOi0gqADxyILnSAibvT70a6x0cKvFyLE8nw3vvGCBLC0ibCkkQ";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express 1'});
});


router.get('/price_by_nr_firm/:nr', function(req, res, next) {

  var nr = req.params.nr;
  var d = request(`${API_URL}?l=${LOGIN}&p=${PASS}&act=price_by_nr_firm&nr=${nr}&alt&gid`,{
    encoding: null
  },function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var utf8String = iconv.decode(body, "ISO-8859-1");
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.send(iconv.decode(utf8String, "windows-1251"));
    }
  })


});

router.get('/brand_by_nr/:nr', function(req, res, next) {

  var nr = req.params.nr;
  var d = request(`${API_URL}?l=${LOGIN}&p=${PASS}&act=brand_by_nr&nr=${nr}&alt&name&oe&cs=utf8`, function (error, response, body) {
    if (!error && response.statusCode == 200) {

      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.send(body);
    }
  })


});

router.get('/g_info/:key', function(req, res, next) {

  var key = req.params.key;
  var d = request(`${API_URL}?l=${LOGIN}&p=${PASS}&act=g_info&key=${key}&cs=utf8`, function (error, response, body) {
    if (!error && response.statusCode == 200) {

      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.send(body);
    }
  })


});

module.exports = router;
