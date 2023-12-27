// messageManager.js
const Message = require('./models/messagemodel');
require('./app.js'); // Ensure the database connection is established

const MAX_RETRIES = 3;
let retryCount = 0;

const getMessages = async () => {
  while (retryCount < MAX_RETRIES) {
    try {
      const messages = await Message.find().lean().exec();
      return messages || [];
    } catch (error) {
      console.error('Error fetching messages:', error);
      retryCount++;
    }
  }
  throw new Error('Max retries reached. Unable to fetch messages.');
};


const addMessage = async (messageData) => {
  
  try {
    const newMessage = new Message(messageData);
    await newMessage.save();
  } catch (error) {
    console.error('Error adding message:', error);
    throw error;
  }
};

module.exports = {
  getMessages,
  addMessage,
};
