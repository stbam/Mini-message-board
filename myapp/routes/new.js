// form.js

var express = require('express');
var router = express.Router();
const messageManager = require('../messagermanager');

// GET route to render the form
router.get('/', function(req, res) {
  res.render('form');
});

// POST route to handle form submission
router.post('/', function(req, res) {
  const { messageText, messageUser } = req.body;
  messageManager.addMessage({ text: messageText, user: messageUser, added: new Date() });
  res.redirect('/index');
}); 

module.exports = router;
