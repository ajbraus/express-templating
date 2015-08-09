var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  var users = [
      { name: "Bob" }
    , { name: "Andrew" }
    , { name: "Sonja" }
  ]
  res.send(users);
});

module.exports = router;
