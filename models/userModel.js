const mongoose = require("mongoose");

//USER SCHEMA-------------------------------
const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Dont you have a valid name?"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "You does not have Email ?"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  accountCreationTime: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  about: {
    type: String,
    trim: true,
  },
  lastSeen: {
    type: Date,
    default: new Date(),
  },
  gender: {
    type: String,
    enum: {
      values: ["male", "female", "other"],
      message: "gender must be male,female or other 😑",
    },
  },
  chatMembers: [Array],
});

//User Model---------------------------------------------------------------
const User = mongoose.model("Users", usersSchema);

module.exports = User;
