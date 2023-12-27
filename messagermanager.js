// messageManager.js

const currentDate = new Date();
const formattedDate = currentDate.toLocaleString('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true,
});

console.log(formattedDate);


const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: formattedDate,
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: formattedDate,
  },
  {
    text: "hi!",
    user: "KRe",
    added: formattedDate,
  },
  {
    text: "hello again!",
    user: "bro",
    added: formattedDate,
  }, {
    text: "Hi there!",
    user: "Amando",
    added: formattedDate,
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: formattedDate,
  },
  {
    text: "hi!",
    user: "KRe",
    added: formattedDate,
  },
  {
    text: "hello again!",
    user: "bro",
    added: formattedDate,
  },
  {
    text: "Hi there!",
    user: "Amando",
    added: formattedDate,
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: formattedDate,
  },
  {
    text: "hi!",
    user: "KRe",
    added: formattedDate,
  },
  {
    text: "hello again!",
    user: "bro",
    added: formattedDate,
  },
  {
    text: "Hi there!",
    user: "Amando",
    added: formattedDate,
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: formattedDate,
  },
  {
    text: "hi!",
    user: "KRe",
    added: formattedDate,
  },
  {
    text: "hello again!",
    user: "bro",
    added: formattedDate,
  },
  {
    text: "Hi there!",
    user: "Amando",
    added: formattedDate,
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: formattedDate,
  },
  {
    text: "hi!",
    user: "KRe",
    added: formattedDate,
  },
  {
    text: "hello again!",
    user: "bro",
    added: formattedDate,
  },
  
];

console.log(messages);

module.exports = {
  getMessages: () => messages,
  addMessage: (message) => messages.push(message),
};
