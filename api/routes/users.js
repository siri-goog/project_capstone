var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const users = [
    {user_id: '1', firstname: 'Goog', lastname: 'M.'},
    {user_id: '2', firstname: 'Pol', lastname: 'P.'},
    {user_id: '3', firstname: 'Soda', lastname: 'M.'}
  ]

  res.json(users)
});

module.exports = router;
