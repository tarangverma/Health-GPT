const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    sender: String,
    message: String,
    reply: String,
    timestamp: { type: Date, default: Date.now }
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;