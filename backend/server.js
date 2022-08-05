const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5001;

const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/errorMiddleware');

//connect to db -- not connecting?? check IP on mongodb atlas or user credentials
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false })); //to decode body - x-www-form-urlencoded
// able to recieve req.body.

app.use('/api/goals', require('../backend/routes/goalRoutes'));

app.use(errorHandler);
//your custom error handler should come last

app.listen(port, () => {
  console.log(`Server Started on port:${port}`);
});
