
const express = require("express");
const app = express();

const connect = require('./config/db');
const userController = require('./controllers/user.controller');

app.use("/users", userController);

const start = async () =>{
    await connect();

    app.listen(5000,()=>{
        console.log("Listening on port 5000");
    });
};

module.exports = start;