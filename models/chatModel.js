const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  chatStartDate: {
    type: Date,
    default: Date.now(),
  },
  chatMembers: [String],
  messages: [Object],
});

const ChatModel = mongoose.model("Chats", chatSchema);

module.exports = ChatModel;
