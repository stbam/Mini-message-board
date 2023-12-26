var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index2', {authors});
  
});

module.exports = router;

/* 
var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', async function(req, res, next) {
  const authors = await fetchAuthors(); // Assuming you have a function to fetch authors

  res.render('index2', { title: 'Express', authors }); // Pass the authors variable to the template
});

module.exports = router;


*/