const Chat = require("./../models/chatModel");

exports.getChat = async (req, res) => {
  try {
    console.log(req.params);

    const chat = await Chat.findById(req.params.chatID);
    res.status(200).json({
      status: "success",
      chat: chat,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: error,
    });
    console.log("Error 👎👎👎" + error);
  }
};

exports.createChat = async (req, res) => {
  try {
    console.log(req.body);

    const chat = await Chat.create(req.body);
    res.status(200).json({
      status: "success",
      chat: chat,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: error,
    });
    console.log("Error 👎👎👎" + error);
  }
};
