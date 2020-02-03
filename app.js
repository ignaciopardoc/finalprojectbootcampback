const express = require("express");
const app = express();
const port = 3000;
const connection = require("./mysql/config")
const cors = require("cors")

const bodyParser = require("body-parser");
app.use(cors())

app.use(bodyParser.json({ limit: '100000mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '100000mb' }));

//require path for the routes
const userRouter = require("./routes/users.js")
const businessRouter = require("./routes/business.js")
const authController = require("./routes/auth.js")



//connection to the routes
app.use('/user', userRouter)
app.use('/business', businessRouter)
app.use('/auth', authController)

connection.connect(console.log("DB Connected"))

app.listen(port, console.log(`Connected to the port ${port}`))