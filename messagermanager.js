const Message = require('./models/messagemodel');
const { DateTime } = require('luxon');

const getMessages = async () => {
  try {
    const messages = await Message.find().lean();
    return messages.map(message => ({
      ...message,
      addednew: message.added ? DateTime.fromJSDate(message.added).toLocaleString({ month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true }) : null,
    }));
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
