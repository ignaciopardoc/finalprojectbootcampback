const express = require("express");
const app = express();
const port = 3000;
const connection = require("./mysql/config")

const bodyParser = require("body-parser");

//require path for the routes
const userRouter = require("./routes/users.js")


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//connection to the routes
app.use('/user', userRouter)

connection.connect(console.log("DB Connected"))

app.listen(port, console.log(`Connected to the port ${port}`))