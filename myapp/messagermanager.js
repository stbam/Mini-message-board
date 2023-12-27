// messageManager.js

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    },
    {
      text: "hi!",
      user: "KRe",
      added: new Date()
    },{
      text: "hello again!",
      user: "bro",
      added: new Date()
    }
  ];
  
  console.log(messages);
  
  module.exports = {
    getMessages: () => messages,
    addMessage: (message) => messages.push(message),
  };
  