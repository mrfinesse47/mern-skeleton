const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5001;

const app = express();

app.use('/api/goals', require('../backend/routes/goalRoutes'));
app.listen(port, () => {
  console.log(`Server Started on port:${port}`);
});
