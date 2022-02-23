const express = require("express");
const userController = require("../controller/userController");
const chatController = require("../controller/chatController");
const Router = express.Router();

//Routes-----------------------------------------------------------
Router.route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

Router.route("/login").post(userController.authenticateUser);

Router.route("/:id").get(userController.getUser);

Router.route("/chat/:chatID").get(chatController.getChat);
Router.route("/chat/").post(chatController.createChat);

module.exports = Router;
