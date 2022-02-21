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

Router.route("/chat/:currentUserID/:otherUserID").get(chatController.getChat);

module.exports = Router;
