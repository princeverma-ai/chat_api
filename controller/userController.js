const User = require("./../models/userModel");

//Controllers....................................

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200);
    res.json({
      status: "success",
      results: users.length,
      data: { users },
    });
  } catch (error) {
    res.status(400).json({
      status: "An error occured",
      message: error,
    });
    console.log(error);
  }
};

//----------------------------------------------------

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        newUser,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "An error occured",
      message: error,
    });
    console.log("Error 👎👎👎" + error);
  }
};

//-------------------------------------------------------
exports.authenticateUser = async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.find(req.body);
    if (user[0]) {
      res.status(200).json({
        status: "succesful login",
        user: user[0],
      });
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    res.status(400).json({
      status: "An error occured",
      message: error,
    });
    console.log("Error 👎👎👎" + error);
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(201).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: error,
    });
    console.log("Error 👎👎👎" + error);
  }
};
