//index.js
var express = require("express");
var router = express.Router();
const messageManager = require("../messagermanager");

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); */

router.get("/", function (req, res, next) {
  const messages = messageManager.getMessages();
  res.render("form", { title: "Mini Messageboard", messages });
});
router.post("/new", async (req, res) => {
  const { messageText, messageUser } = req.body;
  messageManager.addMessage({
    text: messageText,
    user: messageUser,
    added: new Date(),
  });
  res.redirect("/");
});

router.post("/new", async (req, res) => {
  console.log(req.body.messageText);
  messages.push({ text: messageText, user: messageUser, added: new Date() });
});

module.exports = router;
