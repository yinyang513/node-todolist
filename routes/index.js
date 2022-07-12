const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.setHeader('Content-type','application/x-www-form-urlencoded');
  res.render('index', { title: 'Express' });
  // console.log(req.body)
  
});

router.post('/', function(req, res, err) {
  console.log(req.body.todo)
  // res.setHeader('Content-type','application/x-www-form-urlencoded');
  res.render('index', { title: req.body.todo })
})

module.exports = router;
