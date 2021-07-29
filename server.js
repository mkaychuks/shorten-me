const express = require('express');
const mongoose = require('mongoose');
const urlRouter = require('./routes/urlRoutes');
require('dotenv/config');
const app = express(); // init express app

app.use(express.json()); // allow json inputs and res
app.use('/api/', urlRouter);

// creating a database connection
mongoose
  .connect(process.env.DB_URI, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log('Server listening on port 5000...');
    });
  })
  .catch((err) => {
    console.log(err);
  });
