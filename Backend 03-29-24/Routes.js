const express = require('express');
const Chat = require('./Chat');

const router = express.Router();
const preDefinedMessag = {
  "hello": "hey welcome to HealthCare.AI"
}
// Send a new Message
router.post('/sendMessage', async (req, res) => {
  const {  sender, message } = req.body;

  try {
    let reply = "Sorry we are still working on it";
    if(preDefinedMessag[message.toLowerCase()]) {
      reply = preDefinedMessag[message.toLowerCase()];
    }
    const newChat = new Chat({ sender, message, reply});
    await newChat.save();
    res.status(200).send(newChat);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Get all messages
router.get('/getAllMessages', async (req, res) => {
  try {
    const AllChat = await Chat.find();
    res.status(200).send(AllChat);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});





// Delete all Chats
router.delete('/deleteChats', async (req, res) => {

  try {
    const DeleteChat = await Chat.deleteMany({});
    res.status(200).json({message: 'All chats deleted successfully'});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete chats' });
  }
});

module.exports = router;