const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  members: {
    type: [String],
    required: [true, "Please add two or more chat members"],
  },
  chatStartDate: {
    type: Date,
    default: Date.now(),
  },
  messages: [Object],
});

const ChatModel = mongoose.model("Chats", chatSchema);

module.exports = ChatModel;
