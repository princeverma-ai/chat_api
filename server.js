const mongoose = require("mongoose");

const app = require("./app");

const port = 8000;
const db = "mongodb+srv://prince:princechatapi@cluster0.oh6yl.mongodb.net/test";

//connection to the database--------------------------------------------------------
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("connection to database eshtablished 😀🔥");
    })
    .catch(err => {
        console.log(err);
    });

//server start----------------------------------------------------------------------
app.listen(port, () => {
    console.log("Server started ✔️");
});
