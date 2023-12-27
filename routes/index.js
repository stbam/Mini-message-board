var express = require("express");
var router = express.Router();
const messageManager = require("../messagermanager");

router.get("/", async function (req, res, next) {
  try {
    const messages = await messageManager.getMessages();
    res.render("form", { title: "Mini Messageboard", messages });
  } catch (error) {
    console.error("Error retrieving messages:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/new", async (req, res) => {
  try {
    const { messageText, messageUser } = req.body;
    await messageManager.addMessage({
      text: messageText,
      user: messageUser,
      added: new Date(),
    });
    res.redirect("/");
  } catch (error) {
    console.error("Error adding message:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
