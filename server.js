const express = require("express");
const connect = require("./config/connectDb");
const userRouter = require('./routes/user.route')
const app = express();
require("dotenv").config();
app.use(express.json());
app.use('/user/',userRouter)
const PORT = 5000 || process.env.PORT;
connect();

app.listen(PORT, (error) => {
  if (error) throw console.error(error);
  console.log("listen to port" + PORT);
});
