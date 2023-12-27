// messageManager.js
const Message = require('./models/messagemodel');
require('./app.js'); // Ensure the database connection is established

const getMessages = async () => {
  try {
    const messages = await Message.find().lean();
    return messages || [];
  } catch (error) {
    console.error('Error fetching messages:', error);
    throw error;
  }
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
