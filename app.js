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
const dogController = require("./routes/dog.js")
const eventRouter = require("./routes/event.js")
const reviewRouter = require("./routes/review")


app.use("/public", express.static("public"))
//connection to the routes
app.use('/user', userRouter)
app.use('/business', businessRouter)
app.use('/auth', authController)
app.use('/dog', dogController)
app.use("/event", eventRouter)
app.use('/review', reviewRouter)

connection.connect(console.log("DB Connected"))

app.listen(port, console.log(`Connected to the port ${port}`))